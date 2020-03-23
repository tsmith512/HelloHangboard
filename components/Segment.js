import * as React from 'react';
import { Text, View, StyleSheet, Vibration, ToastAndroid } from 'react-native';
import { Audio } from 'expo-av';

import Button from './Button';
import CircuitHandler from '../lib/CircuitHandler';

export default class Segment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: false, // @TODO: Can this be "ready" (step 0)? How do we get that?
      remaining: false, // @TODO: Warn the user that manual input is required if there's no timeout set
      buttonText: 'Start', // @TODO: There's logic to set this in _updateStep but that doesn't run yet
      buttonClass: 'go'
    };
    // @TODO: The notes above are just dumb, clearly I need to fire an update
    // when this component and that class are instantiated.

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

  _button() {
    if (this.CircuitHandler.isWaiting()) {
      // go
      this.CircuitHandler.start();
    } else {
      // stop
      this.props.navigation.navigate('Welcome');
    }
  }

  _updateStep = (name, data) => {
    const beep = new Audio.Sound();

    // In a warning/rest state:
    if (['warn', 'rest'].indexOf(data.step.mode) > -1) {
      // Do a 3-beep countdown at the end:
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
      if (name == 'new step') {
        const tone = (data.step.mode == 'on') ? 'high' : 'low';
        this._beep(tone);
      }
    }

    // Update the display state
    this.setState((previousState) => {
      return {
        mode: data.step.mode,
        remaining: data.remaining,
        buttonText: (data.step.mode == "ready") ? 'Start' : 'Exit',
        buttonClass: (data.step.mode == "ready") ? 'go' : 'stop'
      }
    });
  }

  _beep = async(tone) => {
    await this.tones[tone].playAsync();
    this.tones[tone].setPositionAsync(0);
    try {
      // Your sound is playing!
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.CircuitHandler = new CircuitHandler(this._updateStep);
  }

  componentWillUnmount() {
    // @TODO: Need to destroy the CircuitHandler object and clear its interval
    this.CircuitHandler.stop();
  }

  render() {
    // @TODO: The title should come from the workout object, but at the moment
    // we only have one, and I don't have a Workout class yet, so just hardcode
    // it because that's how responsible engineering works, right?
    return (
      <View style={[segmentStyles.screen, segmentStyles['screen' + this.state.mode]]}>
        <Text style={segmentStyles.titleText}>Joe's Circuit #1</Text>
        <Text style={segmentStyles.modeText}>{this.state.mode}</Text>
        <Text style={segmentStyles.secondsText}>{this.state.remaining}</Text>
        <Button title={this.state.buttonText} class={this.state.buttonClass} onPress={() => this._button()} />
      </View>
    )
  }
}

const segmentStyles = StyleSheet.create({
  // @TODO: This is the same "screen" style from Welcome, make this shareable/DRY
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  screenready: {
    backgroundColor: '#EEEEEE',
  },

  screenon: {
    backgroundColor: '#FF3300',
  },

  screenoff: {
    backgroundColor: '#FFCC33',
  },

  screenrest: {
    backgroundColor: '#66CC66',
  },

  titleText: {
    fontSize: 24,
    paddingBottom: 8,
    borderBottomWidth: 1,
    marginBottom: 8,
  },

  modeText: {
    fontSize: 72,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2
  },

  secondsText: {
    fontSize: 36,
    fontWeight: 'bold',
  },

});
