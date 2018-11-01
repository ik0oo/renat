import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem';

export default class App extends React.Component {
  state = {
    value: '',
    arr: [],
  };

  onChangeInput = (value) => {
    this.setState({ value });
  };

  addElementHandler = () => {
    if (this.state.value.trim() === '') {
      return;
    }

    this.setState(prevState => {
      return {
        arr: prevState.arr.concat(this.state.value),
      }
    });
  };

  removeElementHandler = (id) => {
    this.setState(prevState => {
      return {
        arr: prevState.arr.filter((item, index) => index !== id),
      };
    })
  }

  render() {
    const list = this.state.arr.map((content, index) => (
      <ListItem
        key={index}
        content={content}
        onPress={() => this.removeElementHandler(index)}
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
            onPress={this.addElementHandler}
          />
        </View>

        <ScrollView style={styles.list}>
          { list }
        </ScrollView>
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
  list: {
    width: '100%',
  }
});
