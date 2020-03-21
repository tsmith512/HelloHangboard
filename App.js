import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from './components/Welcome';

export default class HelloHangboard extends Component {
  render() {
    return (
      <Welcome />
    );
  }
}

class Segment extends Component {
  componentDidMount() {
    // We're gonna count down from ten.
    setInterval(() => (
      this.setState(previousState => (
        { secondsLeft: (previousState.secondsLeft - 1) >= 0 ? previousState.secondsLeft - 1 : 10}
      ))
    ), 1000);
  }

  state = {secondsLeft: 10 };

  render() {
    return (
      <Text>Time Remaining: {this.state.secondsLeft}</Text>
    )
  }
}
