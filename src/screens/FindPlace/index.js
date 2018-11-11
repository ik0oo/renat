// libs
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

// utils
import { mapStateToProps } from '../../redux.utils';

// components
import PlaceList from '../../components/PlaceList';

const showPlaceDetails = (id, passProps) => Navigation.push(id, {
  component: {
    name: 'app.PlaceDetail',
    passProps,
    options: {
      topBar: {
        title: {
          text: passProps.name
        },
      },
    },
  }
})

@mapStateToProps(state => ({
  places: state.places.places,
}))
export default class FindPlaceScreen extends Component {
  render() {
    const getSelectedPlace = key => this.props.places.find(item => item.key === key);

    return (
      <View style={style.container}>
        <PlaceList
          itemList={this.props.places}
          onPressItem={(key) => showPlaceDetails(this.props.componentId, getSelectedPlace(key))}
        />
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
