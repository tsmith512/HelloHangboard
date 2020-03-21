import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

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
    fontWeight: 'bold'
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
    alert('Test!');
  }

  render() {
    return (
      <Button title="Test" onPress={this._onPressButton} />
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
