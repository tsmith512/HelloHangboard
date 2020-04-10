import * as React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Title from './Title';
import Link from './Link';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  _exit = () => {
    this.props.navigation.navigate('Welcome');
  }

  render = () => {
    return (
      <View style={aboutStyles.container}>
        <View style={aboutStyles.main}>
          <AntDesign style={aboutStyles.closeButton} name="closecircleo" size={32} color="black" onPress={this._exit} />
          <Title small />
          <Text style={{marginTop: 8, marginBottom: 8}}>Sources:</Text>
          <Link icon="link" title="REI's post “Hangboard Training 101”" href='https://www.rei.com/blog/climb/hangboard-training-101'></Link>
          <Link icon="link" title="Metolious Training Guide" href='https://www.metoliusclimbing.com/training-guide-overview.html'></Link>
          <Text style={{marginTop: 8, marginBottom: 8}}>With special thanks to Joe and Jay.</Text>
          <Text style={aboutStyles.warning}>
            Improper use of a hangboard can cause serious finger and tendon
            injury; don't strain to complete a set and do not train to the
            failure point. Improper installation can cause a serious fall. Refer
            to its setup and usage instructions as well as an experienced
            trainer before use.
          </Text>
          <Link icon="hearto" title="Created by TSmith" href='https://tsmith.com' color='#CC0066'></Link>
        </View>
      </View>
    );
  }
}

const aboutStyles = StyleSheet.create({
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

  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },

  warning: {
    marginTop: 8,
    borderTopWidth: 1,
    paddingTop: 8,
    color: '#000000',
    fontWeight: 'bold',
  },
});
