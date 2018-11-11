// libs
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export default class PickLocation extends Component {
  state = {
    focusedLocation: {
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122,
    },
    locationChosen: true,
  };

  pickLocationHandler = (event) => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
        locationChosen: true,
      };
    });
    this.props.onLocationPick({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coordsEvent = {
        nativeEvent: {
          coordinate: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          }
        }
      };
      this.pickLocationHandler(coordsEvent);

    }, error => {
      alert('fetching the position failed. Please pick position manually');
    });
  };

  render() {
    let marker = null;

    if (this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedLocation} />
    }

    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          // region={this.state.focusedLocation}
          style={styles.map}
          onPress={this.pickLocationHandler}
          ref={ref => this.map = ref}
        >
          {marker}
        </MapView>
        <View>
          <Button title="locate me" onPress={this.getLocationHandler} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: 250
  }
});
