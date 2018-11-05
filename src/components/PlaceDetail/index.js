import React from 'react';
import { StyleSheet, Modal, View, Text, Image, Button, TouchableOpacity } from 'react-native';

const PlaceDetail =  ({ data, onClose, onDelete }) => {
  const modalContent = !!data && (
    <View>
      <Image source={data.image} style={styles.image} />
      <Text style={styles.name}>{data.name}</Text>
    </View>
  );

  return (
    <Modal
      visible={!!data}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContent}>
        { modalContent }
        <View>
          <Button title="Close" onPress={onClose} />

          <TouchableOpacity style={styles.deleteButtonContainer} onPress={() => onDelete(data.key)}>
            <View style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PlaceDetail;

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
