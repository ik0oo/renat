import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem';

export default class App extends React.Component {
  state = {
    value: '',
    arr: [],
  };

  onChangeInput = (value) => {
    this.setState({ value });
  };

  submitHandler = () => {
    if (this.state.value.trim() === '') {
      return;
    }

    this.setState(prevState => {
      return {
        arr: prevState.arr.concat(this.state.value),
      }
    });
  };

  render() {
    const list = this.state.arr.map((content, index) => (
      <ListItem
        key={index}
        content={content}
        onPress={() => { alert(`selected id - ${index}`); }}
      />
    ));

    return (
      <View style={styles.container}>
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
            onPress={this.submitHandler}
          />
        </View>

        <View>
          { list }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 2,
  },
  button: {
    flex: 1,
  }
});
