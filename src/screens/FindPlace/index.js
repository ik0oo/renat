// libs
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// utils
import { mapStateToProps } from '../../redux.utils';
import { showPlaceDetails } from '../navigation';

// components
import PlaceList from '../../components/PlaceList';

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
