import * as React from 'react';
import { StyleSheet, Text } from 'react-native';


export default class Title extends React.Component {
  render() {
    return (
      <Text style={headlineStyles.title}>Hello, Hangboard</Text>
    )
  }
}

const headlineStyles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    margin: 16
  }
});
