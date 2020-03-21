import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';

export default class HelloHangboard extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Title />
        <Button />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headline: {
    fontSize: 36,
    fontWeight: 'bold',
    margin: 16
  }
});

class Title extends Component {
  render() {
    return (
      <Text style={styles.headline}>Hello, Hangboard</Text>
    )
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
