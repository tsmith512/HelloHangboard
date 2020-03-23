import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={buttonStyles.base} onPress={this.props.onPress}>
        <Text style={[buttonStyles.text, buttonStyles[this.props.class]]}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const buttonStyles = StyleSheet.create({
  base: {
    margin: 16,
    padding: 16,
    backgroundColor: '#EEE',
    borderRadius: 4,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOpacity: .025,
  },

  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform:  'uppercase',
    letterSpacing: 1
  },

  go: {
    color: '#009900'
  },

  stop: {
    color: '#CC0000'
  }
});
