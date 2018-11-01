import React from 'react';
import { StyleSheet, FlatList, Text, View, ScrollView, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem';
import PlaceList from './src/components/PlaceList';
import PlaceInput from './src/components/PlaceInput';

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
        arr: prevState.arr.concat({ value: this.state.value, key: String(prevState.arr.length + 1) }),
      }
    });
  };

  removeElementHandler = (id) => {
    this.setState(prevState => {
      return {
        arr: prevState.arr.filter((item) => item.key !== id),
      };
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          onChangeInput={this.onChangeInput}
          onPressButton={this.addElementHandler}
          value={this.state.value}
        />
        <PlaceList
          itemList={this.state.arr}
          onPressItem={(id) => this.removeElementHandler(id)}
        />
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
});
