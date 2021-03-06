import * as React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Player } from '@react-native-community/audio-toolkit';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import { AntDesign } from '@expo/vector-icons';

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
    this.tones.low = new Player('beep_low.wav', { autoDestroy: false }).prepare();
    this.tones.regular = new Player('beep_regular.wav', { autoDestroy: false }).prepare();
    this.tones.high = new Player('beep_high.wav', { autoDestroy: false }).prepare();
  }

  _start = () => {
    this.CircuitHandler.start();
  }

  _exit = () => {
    this.props.navigation.navigate('Welcome');
  }

  _updateStep = (name, data) => {
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
    this.tones[tone].seek(0);
    this.tones[tone].play();
  }

  componentDidMount() {
    this.CircuitHandler = new CircuitHandler(this.workoutID, this._updateStep);
    activateKeepAwake();
  }

  componentWillUnmount() {
    this.CircuitHandler.stop();
    this.tones.low.destroy();
    this.tones.regular.destroy();
    this.tones.high.destroy();
    deactivateKeepAwake();
  }

  render() {
    return (
      <View style={segmentStyles.container}>
        <View style={[segmentStyles.screen, segmentStyles['screen' + this.state.mode]]}>
          <Text style={segmentStyles.titleText}>{this.workout.title}</Text>
          {this.state.remaining !== false &&
            <View style={segmentStyles.progressWrapper}>
              <Text style={segmentStyles.progressText}>Step {this.state.stepsCurrent} / {this.state.stepsTotal}</Text>
              <CircuitProgress percentage={this.state.stepsProgress} />
            </View>
          }
          {this.state.mode == 'ready' && <Text style={segmentStyles.descText}>{this.workout.description}</Text>}
          {this.state.label && <Text style={segmentStyles.modeText}>{this.state.label}</Text>}
          {this.state.remaining !== false && <Text style={segmentStyles.secondsText}>{this.state.remaining.toString().padStart(2, '0')}</Text>}
          {this.state.mode != 'ready' && <AntDesign style={segmentStyles.iconButton} name="closecircleo" size={32} color="white" onPress={this._exit} />}
          {this.state.mode != 'ready' && <AntDesign style={segmentStyles.iconShadow} name="closecircleo" size={32} color="black" />}
          {this.state.mode == 'ready' && <AntDesign style={segmentStyles.iconButton} name="play" size={64} color="white" onPress={this._start} />}
          {this.state.mode == 'ready' && <AntDesign style={segmentStyles.iconShadow} name="play" size={64} color="black" />}
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
    borderWidth: 4,
  },

  screenready: {
    backgroundColor: '#007AFF',
    borderColor: '#004999',
  },
  screenwarn: {
    backgroundColor: '#FFCC00',
    borderColor: '#997A00',
  },
  screenon: {
    backgroundColor: '#FF3B30',
    borderColor: '#990800',
  },
  screenoff: {
    backgroundColor: '#FF9500',
    borderColor: '#995A00',
  },
  screenrest: {
    backgroundColor: '#66CC66',
    borderColor: '#267326',
  },

  titleText: {
    position: 'absolute',
    top: 32,
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingBottom: 8,
    borderBottomWidth: 1,
    marginBottom: 8,
    color: '#000000',
  },

  descText: {
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 16,
    color: '#000000',
  },

  progressWrapper: {
    position: 'absolute',
    textAlign: 'center',
    top: 64,
    left: 16,
    width: '100%',
  },

  progressText: {
    marginTop: 24,
    fontSize: 14,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#000000',
  },

  modeText: {
    fontSize: 84,
    fontFamily: (Platform.OS == 'ios') ? 'HelveticaNeue-CondensedBlack' : 'sans-serif-condensed',
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  secondsText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000000',
    position: 'absolute',
    bottom: 96,
    zIndex: 20,
  },


  iconButton: {
    position: 'absolute',
    bottom: 32,
    zIndex: 10,
  },

  iconShadow: {
    position: 'absolute',
    bottom: 30,
    transform: [{ translateX: 2 }],
    zIndex: 0,
    opacity: 0.5,
  },
});
