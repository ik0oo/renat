import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { goHome } from './homeNavi';

export default class AuthScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <Button title="SignIn" onPress={goHome} />
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
