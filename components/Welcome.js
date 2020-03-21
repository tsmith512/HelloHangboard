import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Title from './Title';
import Button from './Button';

export default class Welcome extends React.Component {
  _start() {
    alert('At least this is local now');
  }

  render() {
    return (
      <View style={welcomeStyles.screen}>
        <Title />
        <Button title="Start" onPress={() => this._start()} />
      </View>
    );
  }
}

const welcomeStyles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
