import * as React from 'react';
import { StyleSheet, View } from 'react-native';

export default class CircuitProgress extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={circuitProgressStyles.outside}>
        <View style={[circuitProgressStyles.inside, {width: this.props.percentage}]}></View>
      </View>
    );
  }
}

const circuitProgressStyles = StyleSheet.create({
  outside: {
    width: '80%',
    height: 10,
    margin: 8,
    borderColor: '#000000',
    borderWidth: 1,
  },
  inside: {
    position: 'absolute',
    backgroundColor: '#000000',
    top: 0,
    left: 0,
    height: 8,
  },
});
