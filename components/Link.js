import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class Link extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: props.hasOwnProperty('color') ? props.color : '#0066FF',
    };
  }

  render() {
    return (
      <TouchableOpacity style={linkStyles.linkButton} onPress={() => {Linking.openURL(this.props.href);}}>
      <View style={linkStyles.flexRow}>
        <AntDesign name={this.props.icon} size={24} color={this.state.color} />
        <Text style={[linkStyles.linkText, {color: this.state.color}]}>{this.props.title}</Text>
      </View>
      </TouchableOpacity>

    );
  }
}

const linkStyles = StyleSheet.create({
  linkButton: {
    marginTop: 8,
    marginBottom: 8,
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  linkText: {
    paddingLeft: 8,
  }
});
