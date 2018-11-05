import React from 'react';
import { StyleSheet, FlatList, Text, View, ScrollView, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './src/components/ListItem';
import PlaceList from './src/components/PlaceList';
import PlaceInput from './src/components/PlaceInput';
import PlaceDetail from './src/components/PlaceDetail';
import { addPlace, selectPlace, deletePlace, deselectPlace } from './src/store/actions/index';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          data={this.props.selected}
          onClose={() => this.props.onDeselectPlace()}
          onDelete={(key) => this.props.onDeletePlace(key)}
        />
        <PlaceInput
          onPressButton={(name) => this.props.onAddPlace(name)}
        />
        <PlaceList
          itemList={this.props.places}
          onPressItem={(key) => this.props.onSelectPlace(key)}
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selected: state.places.selected,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: (key) => dispatch(deletePlace(key)),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);