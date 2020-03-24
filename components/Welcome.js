import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Title from './Title';
import Button from './Button';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props)
  }

  _start() {
    this.props.navigation.navigate('Segment');
  }

  render() {
    return (
      <View style={welcomeStyles.container}>
        <View style={welcomeStyles.main}>
          <Title />
          <Button title="Joe's Circuit #1" class='dark' onPress={() => this._start()} />
        </View>
        <Text style={welcomeStyles.footer}>A very experimental take on a HelloWorld.</Text>
      </View>
    );
  }
}

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },

  main: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 4
  },

  footer: {
    margin: 32,
    color: '#999999',
    fontStyle: 'italic',
  }
});
