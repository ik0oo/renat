import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export default class PlaceInput extends Component {
  state = {
    value: '',
  }

  onChangeInput = (value) => {
    this.setState({ value });
  };

  render() {
    const { onPressButton } = this.props;

    return (
      <View style={styles.inputContainer}>
        <TextInput
          value={this.state.value}
          style={styles.input}
          onChangeText={this.onChangeInput}
          placeholder="input your text here"
        />
        <Button
          style={styles.button}
          title="Add"
          onPress={() => onPressButton(this.state.value)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    flex: 2,
    padding: 3,
    paddingLeft: 15,
  },
  button: {
    flex: 1,
  },
});
