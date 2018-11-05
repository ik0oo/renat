import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class SignIn extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>sign in</Text>
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