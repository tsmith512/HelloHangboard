import * as React from 'react';
import { Text, View, StyleSheet, Vibration } from 'react-native';

import Button from './Button';

export default class Segment extends React.Component {
  constructor(props) {
    super(props)
  }

  _stop() {
    this.props.navigation.navigate('Welcome');
  }

  _updateStep() {
    this.setState((previousState) => {
      const newIndex = (previousState.index + 1) % previousState.circuit.length;
      return {
        index: newIndex,
        step: previousState.circuit[newIndex]
      }
    });
    this.timer = setTimeout(() => {this._updateStep();}, this.state.step.duration * 1000);
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this._updateStep();
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  state = {
    // @TODO / WIP: Legitimately a terrible way to do this! Also this should not
    // be a state since the workout is a constant.
    circuit: [
      {mode: 'on', duration: 7},
      {mode: 'off', duration: 3},
      {mode: 'on', duration: 7},
      {mode: 'off', duration: 3},
      {mode: 'on', duration: 7},
      {mode: 'off', duration: 3},
      {mode: 'on', duration: 7},
      {mode: 'off', duration: 3},
      {mode: 'on', duration: 7},
      {mode: 'off', duration: 3},
      {mode: 'on', duration: 7},
      {mode: 'off', duration: 3},
      {mode: 'rest', duration: 60}
    ],

    index: -1,
    step: {mode: 'ready'}
  };

  render() {
    return (
      <View style={segmentStyles.screen}>
        <Text>{this.state.step.mode}</Text>
        <Text>Duration: {this.state.step.duration}</Text>
        <Button title="Stop" class="stop" onPress={() => this._stop()} />
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
