import * as React from 'react';
import { View, Text, StyleSheet, ToastAndroid } from 'react-native';

import Title from './Title';
import Button from './Button';
import Workouts from '../lib/Workouts';


export default class Welcome extends React.Component {
  constructor(props) {
    super(props)
  }

  _start(workout) {
    this.props.navigation.navigate('Segment', {workout: workout});
  }

  render() {
    return (
      <View style={welcomeStyles.container}>
        <View style={welcomeStyles.main}>
          <Title />
          <View style={welcomeStyles.workoutWrapper}>
            <Button title={Workouts.joe.title} class='dark' onPress={() => this._start('joe')} />
            <Text style={welcomeStyles.workoutDescription}>{Workouts.joe.description}</Text>
          </View>
          <View style={welcomeStyles.workoutWrapper}>
            <Button title={Workouts.rei.title} class='dark' onPress={() => this._start('rei')} />
            <Text style={welcomeStyles.workoutDescription}>{Workouts.rei.description}</Text>
          </View>
          <Text style={welcomeStyles.footer}>A "Hello World" grown up just enough to hurt you.</Text>
        </View>
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
    padding: 16,
  },

  main: {
    alignItems: 'stretch',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 4,
  },

  workoutWrapper: {
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    marginBottom: 16,
    alignItems: 'center',
  },

  footer: {
    color: '#999999',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
