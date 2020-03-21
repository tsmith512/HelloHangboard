import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Button extends React.Component {
  _onPressButton() {
    alert('Yeah I still don\'t know about that...');
  }

  render() {
    return (
      <TouchableOpacity style={[buttonStyles.base, buttonStyles.go]} onPress={this._onPressButton}>
        <Text style={buttonStyles.text}>Start</Text>
      </TouchableOpacity>
    );
  }
}

const buttonStyles = StyleSheet.create({
  base: {
    margin: 16,
    padding: 16,
    backgroundColor: '#333333',
    borderRadius: 4
  },

  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform:  'uppercase',
    letterSpacing: 1
  },

  go: {
    backgroundColor: '#00CC33'
  }
});
