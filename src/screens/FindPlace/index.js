// libs
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// utils
import { mapStateToProps } from '../../redux.utils';

// components
import PlaceList from '../../components/PlaceList';

@mapStateToProps(state => ({
  places: state.places.places,
}))
export default class FindPlaceScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <PlaceList itemList={this.props.places} />
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
