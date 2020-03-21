import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class HelloHangboard extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Title />
        <StartButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headline: {
    fontSize: 36,
    fontWeight: 'bold',
    margin: 16
  },

  button: {
    margin: 16,
    padding: 16,
    backgroundColor: '#333333',
    borderRadius: 4
  },

  buttonGo: {
    backgroundColor: '#00CC33'
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform:  'uppercase',
    letterSpacing: 1
  }
});

class Title extends Component {
  render() {
    return (
      <Text style={styles.headline}>Hello, Hangboard</Text>
    )
  }
}

class StartButton extends Component {
  _onPressButton() {
    alert('Yeah I still don\'t know about that...');
  }

  render() {
    return (
      <TouchableOpacity style={[styles.button, styles.buttonGo]} onPress={this._onPressButton}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
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
