import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloHangboard extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text style={{textAlign: "center", fontSize: 32}}>Hello, Hangboard.</Text>
        <Text style={{textAlign: "center"}}>I'm stuck in my apartment because of coronavirus.</Text>
        <PropTest name="Joe" />
      </View>
    );
  }
}

class PropTest extends Component {
  render() {
    return (
      <Text style={{textAlign: "center"}}>This is all {this.props.name}'s fault!</Text>
    )
  }
}
