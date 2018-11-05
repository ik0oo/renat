import React from 'react';
import { StyleSheet, FlatList, Text, View, ScrollView, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem';
import PlaceList from './src/components/PlaceList';
import PlaceInput from './src/components/PlaceInput';
import PlaceDetail from './src/components/PlaceDetail';

export default class App extends React.Component {
  state = {
    value: '',
    arr: [],
    selected: null,
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
        arr: prevState.arr.concat({
          value: this.state.value,
          key: String(prevState.arr.length + 1),
          image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Hanalai_Beach_is_a_cool_place_to_hang_out_%288034645668%29.jpg'
          },
        }),
      }
    });
  };

  selectElementHandler = key => {
    this.setState(prevState => {
      return {
        selected: prevState.arr.find(item => item.key === key),
      }
    })
  }

  onCloseModalHandler = () => {
    this.setState({ selected: null });
  };

  onDeleteElementHandler = (key) => {
    this.setState(prevState => {
      return {
        arr: prevState.arr.filter((item) => item.key !== key),
      };
    }, this.onCloseModalHandler)
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          data={this.state.selected}
          onClose={this.onCloseModalHandler}
          onDelete={this.onDeleteElementHandler}
        />
        <PlaceInput
          onChangeInput={this.onChangeInput}
          onPressButton={this.addElementHandler}
          value={this.state.value}
        />
        <PlaceList
          itemList={this.state.arr}
          onPressItem={(key) => this.selectElementHandler(key)}
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
