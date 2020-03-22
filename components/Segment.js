import * as React from 'react';
import { Text, View, StyleSheet, Vibration } from 'react-native';

import Button from './Button';
import CircuitHandler from '../lib/CircuitHandler';

export default class Segment extends React.Component {
  constructor(props) {
    super(props)
  }

  _button() {
    if (this.CircuitHandler.isReady()) {
      // go
      this.CircuitHandler.start();
    } else {
      // stop
      this.props.navigation.navigate('Welcome');
    }
  }

  _updateStep(data) {
    this.setState((previousState) => {
      return {
        mode: data.step.mode,
        remaining: data.remaining,
        buttonText: (data.step.mode == "ready") ? 'Start' : 'Stop',
        buttonClass: (data.step.mode == "ready") ? 'go' : 'stop'
      }
    });
  }

  componentDidMount() {
    this.CircuitHandler = new CircuitHandler();
    this.CircuitHandler.events.on('countdown', _updateStep);
    this.CircuitHandler.events.on('new step', _updateStep);
  }

  componentWillUnmount() {
    // @TODO: Need to destroy the CircuitHandler object and clear its interval
  }

  state = {
    mode: false,
    remaining: false,
    buttonText: 'Start',
    buttonClass: 'go'
  };

  render() {
    return (
      <View style={segmentStyles.screen}>
        <Text>{this.state.mode}</Text>
        <Text>Duration: {this.state.remaining}</Text>
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
  }
});
