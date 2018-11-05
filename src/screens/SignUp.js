import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class SignUp extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>sign up</Text>
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