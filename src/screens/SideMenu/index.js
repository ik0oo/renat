import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
      if (buttonId === 'SideMenuHomeButton') {
        Navigation.mergeOptions('SideMenuHomeRoot', {
          sideMenu: {
            left: {
              visible: true,
            }
          }
        });
      }
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Side Menu</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});