import * as React from 'react';
import { Text, View, StyleSheet, Vibration } from 'react-native';

import Button from './Button';
import CircuitHandler from '../lib/CircuitHandler';

export default class Segment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: false,
      remaining: false,
      buttonText: 'Start',
      buttonClass: 'go'
    };
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
    this.setState((previousState) => {
      return {
        mode: data.step.mode,
        remaining: data.remaining,
        buttonText: (data.step.mode == "ready") ? 'Go' : 'Stop',
        buttonClass: (data.step.mode == "ready") ? 'go' : 'stop'
      }
    });
  }

  componentDidMount() {
    this.CircuitHandler = new CircuitHandler(this._updateStep);
  }

  componentWillUnmount() {
    // @TODO: Need to destroy the CircuitHandler object and clear its interval
  }

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
