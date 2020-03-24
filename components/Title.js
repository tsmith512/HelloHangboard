import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import titleImage from '../assets/title.png';

export default class Title extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={titleImage} style={{ width: 285, height: 68 }} />
      </View>
    )
  }
}

const headlineStyles = StyleSheet.create({
  title: {
    color: '#666666',
    fontSize: 36,
    margin: 16,
  }
});
