import React, { Component } from 'react';
import { StyleSheet, Modal, View, Text, Image, Button, TouchableOpacity } from 'react-native';

// utils
import { mapDispatchToProps } from '../../redux.utils';

// actions
import { deletePlace } from '../../store/actions';

// navi
import { pop } from '../navigation';

@mapDispatchToProps(dispatch => ({
  onDelete: (key) => dispatch(deletePlace(key)),
}))
export default class PlaceDetail extends Component {
  onDeletePlaceHandler = () => {
    this.props.onDelete(this.props.id);
    pop(this.props.componentId);
  }

  render() {
    return (
      <View>
        <View style={styles.modalContent}>
          <View>
            <Image source={this.props.image} style={styles.image} />
            <Text style={styles.name}>{this.props.name}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.deleteButtonContainer} onPress={this.onDeletePlaceHandler}>
              <View style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContent: {
    margin: 22,
  },
  image: {
    width: '100%',
    height: 200,
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
  },
  deleteButtonContainer: {
    alignItems: 'center',
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'red',
    fontSize: 18,
    marginLeft: 10,
  }
});
