import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import titleImage from '../assets/title.png';

export default class Title extends React.Component {
  render() {
    return (
      <View style={{alignItems: (this.props.center ? 'center' : 'flex-start')}}>
        <Image source={titleImage} style={this.props.small ? ({ width: 175, height: 45 }) : ({ width: 285, height: 68 })} />
      </View>
    )
  }
}
