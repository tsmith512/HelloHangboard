import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Button from './Button';

export default class Segment extends React.Component {
  constructor(props) {
    super(props)
  }

  _stop() {
    this.props.navigation.navigate('Welcome');
  }

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
      <View style={segmentStyles.screen}>
        <Text>Time Remaining: {this.state.secondsLeft}</Text>
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
