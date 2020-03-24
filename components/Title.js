import * as React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import titleImage from '../assets/title.png';

export default class Title extends React.Component {
  render() {
    return (
      <Image source={titleImage} style={{ width: 285, height: 68 }} />
    )
  }
}

const headlineStyles = StyleSheet.create({
  title: {
    color: '#666666',
    fontSize: 36,
    // fontWeight: 'bold',
    margin: 16
  }
});
