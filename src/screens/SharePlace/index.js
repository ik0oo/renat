import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class SharePlace extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Share Place Tab</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
