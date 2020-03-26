import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    const workoutsIndex = Object.keys(Workouts).map((workoutID) => (
      <View style={welcomeStyles.workoutWrapper} key={workoutID}>
        <Button title={Workouts[workoutID].title} class='dark' onPress={() => this._start(workoutID)} />
        <Text style={welcomeStyles.workoutDescription}>{Workouts[workoutID].description}</Text>
      </View>
    ));

    return (
      <View style={welcomeStyles.container}>
        <View style={welcomeStyles.main}>
          <Title />
          {workoutsIndex}
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
    backgroundColor: '#333333',
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
