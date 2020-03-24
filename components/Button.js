import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={[buttonStyles.base, buttonStyles[this.props.class + 'Button']]} onPress={this.props.onPress}>
        <Text style={[buttonStyles.text, buttonStyles[this.props.class + 'ButtonText']]}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const buttonStyles = StyleSheet.create({
  base: {
    margin: 16,
    padding: 16,
    borderRadius: 4,
    borderWidth: 1,
    shadowOpacity: .25,
    shadowOffset: {height: 1, width: 1},
    shadowColor: '#000000',
    elevation: 4,
  },

  lightButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EEEEEE',
  },

  darkButton: {
    backgroundColor: '#333333',
    borderColor: '#222222',
  },

  text: {
    fontWeight: 'bold',
    textTransform:  'uppercase',
    letterSpacing: 1,
  },

  lightButtonText: {
    color: '#222222',
  },

  darkButtonText: {
    color: '#EEEEEE',
  },

});
