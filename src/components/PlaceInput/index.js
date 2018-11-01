import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

const PlaceInput = ({ onPressButton, onChangeInput, value }) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={value}
      style={styles.input}
      onChangeText={onChangeInput}
      placeholder="input your text here"
    />
    <Button
      style={styles.button}
      title="Add"
      onPress={onPressButton}
    />
  </View>
);

export default PlaceInput;

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
