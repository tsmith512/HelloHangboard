import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import { AntDesign } from '@expo/vector-icons';

import Button from './Button';
import CircuitProgress from './CircuitProgress';
import CircuitHandler from '../lib/CircuitHandler';
import Workouts from '../lib/Workouts';


export default class Segment extends React.Component {
  constructor(props) {
    super(props);

    // Put safe defaults on the default states, but these will immediately be
    // updated when the workout is instantiated.
    this.state = {
      mode: false,
      remaining: false,
      stepsTotal: false,
      stepsCurrent: false,
      stepsProgress: 0,
      buttonText: 'Start',
      buttonClass: 'go'
    };

    // The button on the Welcome screen passes in the selected circuit as a
    // routing parameter, which would be clunky to access frequently.
    this.workoutID = this.props.route.params.workout;
    this.workout = Workouts[this.workoutID];

    this.tones = {};
    this._loadNotificationSounds();
  }

  _loadNotificationSounds = async() => {
    this.tones.low = new Audio.Sound();
    this.tones.low.loadAsync(require('../assets/sounds/beep-low.wav'));
    this.tones.regular = new Audio.Sound();
    this.tones.regular.loadAsync(require('../assets/sounds/beep-regular.wav'));
    this.tones.high = new Audio.Sound();
    this.tones.high.loadAsync(require('../assets/sounds/beep-high.wav'));
  }

  _start = () => {
    this.CircuitHandler.start();
  }

  _exit = () => {
    this.props.navigation.navigate('Welcome');
  }

  _updateStep = (name, data) => {
    const beep = new Audio.Sound();

    // In a warning/rest state:
    if (['warn', 'rest'].indexOf(data.step.mode) > -1) {
      // Low tone to start a rest
      if (name == 'new step' && data.step.mode == 'rest') {
        this._beep('low');
      }

      // Do a 3-beep countdown at the end of either state
      if (data.remaining < 3) {
        this._beep('low');
      }
    }

    // In an activity state like on/off:
    else {
      // Mid-beep at the end:
      if (data.remaining === 0) {
        this._beep('regular');
      }

      // Then high beep to hang, low beep to release:
      if (name == 'new step' && data.step.mode != 'ready') {
        const tone = (data.step.mode == 'on') ? 'high' : 'low';
        this._beep(tone);
      }
    }

    // Update the display state
    this.setState((previousState) => {
      return {
        mode: data.step.mode,
        label: data.step.label,
        remaining: data.remaining,
        stepsCurrent: data.progress[0],
        stepsTotal: data.progress[1],
        // @TODO: Move this into the progress bar class to hash out, because this is gross
        stepsProgress: (data.progress[0] / data.progress[1] * 100) + "%",
        buttonText: (data.step.mode == "ready") ? 'Start' : 'Exit',
      }
    });
  }

  _beep = async(tone) => {
    await this.tones[tone].playAsync();
    this.tones[tone].setPositionAsync(0);
    try {
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.CircuitHandler = new CircuitHandler(this.workoutID, this._updateStep);
    activateKeepAwake();
  }

  componentWillUnmount() {
    this.CircuitHandler.stop();
    deactivateKeepAwake();
  }

  render() {
    return (
      <View style={segmentStyles.container}>
        <View style={[segmentStyles.screen, segmentStyles['screen' + this.state.mode]]}>
          <AntDesign style={segmentStyles.closeButton} name="closecircleo" size={32} color="white" onPress={this._exit} />
          <Text style={segmentStyles.titleText}>{this.workout.title}</Text>
          {this.state.remaining !== false && <Text style={segmentStyles.progressText}>Step {this.state.stepsCurrent} / {this.state.stepsTotal}</Text>}
          {this.state.remaining !== false && <CircuitProgress percentage={this.state.stepsProgress} />}
          {this.state.mode == 'ready' && <Text style={segmentStyles.descText}>{this.workout.description}</Text>}
          {this.state.label && <Text style={segmentStyles.modeText}>{this.state.label}</Text>}
          {this.state.remaining !== false && <Text style={segmentStyles.secondsText}>{this.state.remaining}</Text>}
          {this.state.mode == 'ready' && <AntDesign style={segmentStyles.goButton} name="play" size={64} color="white" onPress={this._start} />}
        </View>
      </View>
    )
  }
}

const segmentStyles = StyleSheet.create({
  // @TODO: This is the same "screen" style from Welcome, make this shareable/DRY
  container: {
    backgroundColor: '#333333',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 32,
  },

  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 4,
    padding: 16,
  },

  screenready: { backgroundColor: '#007AFF' },
  screenwarn: { backgroundColor: '#FFCC00' },
  screenon: { backgroundColor: '#FF3B30' },
  screenoff: { backgroundColor: '#FF9500' },
  screenrest: { backgroundColor: '#66CC66' },

  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },

  titleText: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingBottom: 8,
    borderBottomWidth: 1,
    marginBottom: 8,
  },

  descText: {
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 16,
  },

  progressText: {
    marginTop: 24,
    fontSize: 14,
    textTransform: 'uppercase',
  },

  modeText: {
    fontSize: 96,
    fontWeight: 'bold',
  },

  secondsText: {
    fontSize: 64,
    fontWeight: 'bold',
  },


  goButton: {
    marginTop: 32,
  },


});
