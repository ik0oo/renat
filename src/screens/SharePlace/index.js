// libs
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';

// utils
import { mapDispatchToProps } from '../../redux.utils';
import validate from "../../validation";

// components
import PlaceInput from '../../components/PlaceInput';
import PickLocation from '../../components/PickLocation';
import MainText from "../../components/UI/MainText";
import HeadingText from "../../components/UI/HeadingText";
import PickImage from "../../components/PickImage";

// dispatchers
import { addPlace } from '../../store/actions';

@mapDispatchToProps(dispatch => ({
  onAddPlace: (name, location) => dispatch(addPlace(name, location))
}))
export default class SharePlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "orange"
  };

  state = {
    controls: {
      placeName: {
        value: "",
        valid: false,
        touched: false,
        validationRules: {
          notEmpty: true
        }
      },
      location: {
        value: null,
        valid: true,
      }
    }
  };

  placeNameChangedHandler = val => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          placeName: {
            ...prevState.controls.placeName,
            value: val,
            valid: validate(val, prevState.controls.placeName.validationRules),
            touched: true
          }
        }
      };
    });
  };

  pickLocationHandler = (location) => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          location: {
            value: location,
            valid: true,
          }
        }
      };
    });
  };

  placeAddedHandler = () => {
    this.props.onAddPlace(
      this.state.controls.placeName.value,
      this.state.controls.location.value,
    );
  };

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <MainText>
          <HeadingText>Share a Place with us!</HeadingText>
        </MainText>
        <PickImage />
        <PickLocation onLocationPick={this.pickLocationHandler} />
        <PlaceInput
            placeData={this.state.controls.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
        <View style={styles.button}>
          <Button
            title="Share the Place!"
            onPress={this.placeAddedHandler}
            disabled={!this.state.controls.placeName.valid}
          />
        </View>
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});
