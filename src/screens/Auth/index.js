import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class AuthScreen extends Component {
  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName,
      }
    });
  };

  render() {
    return (
      <View style={style.container}>
        <Button title="SignIn" onPress={() => this.goToScreen('app.SignIn')} />
        <Button title="SignUp" onPress={() => this.goToScreen('app.SignUp')} />
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
