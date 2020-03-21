import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.style = [buttonStyles.base];
    if (this.props.hasOwnProperty('class')) {
      this.style.push(buttonStyles[this.props.class]);
    }
  }

  render() {
    return (
      <TouchableOpacity style={this.style} onPress={this.props.onPress}>
        <Text style={buttonStyles.text}>{this.props.title}</Text>
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
  },

  stop: {
    backgroundColor: '#CC3300'
  }
});
