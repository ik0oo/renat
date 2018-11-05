import React from 'react';
import { StyleSheet, Modal, View, Text, Image, Button } from 'react-native';

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
          <Button title="Delete" onPress={() => onDelete(data.key)} color="red" />
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
  }
});