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
    backgroundColor: '#333333',
    borderRadius: 4,
    borderColor: '#222222',
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOpacity: .25,
    shadowOffset: {height: 1, width: 1},
    elevation: 4,
  },

  text: {
    color: '#EEEEEE',
    fontWeight: 'bold',
    textTransform:  'uppercase',
    letterSpacing: 1,
  },

  go: {
    color: '#4CD964'
  },

  stop: {
    color: '#FF3B30'
  }
});
