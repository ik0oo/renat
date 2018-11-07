// libs
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// utils
import { mapDispatchToProps } from '../../redux.utils';

// components
import PlaceInput from '../../components/PlaceInput';

// dispatchers
import { addPlace } from '../../store/actions';

@mapDispatchToProps(dispatch => ({
  onAddPlace: (name) => dispatch(addPlace(name))
}))
export default class SharePlaceScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <PlaceInput onPlaceAdded={this.props.onAddPlace} />
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
