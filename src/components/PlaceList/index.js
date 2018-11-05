import React, { Component } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import ListItem from '../ListItem';

const PlaceList = ({ itemList, onPressItem }) => (
  <ScrollView style={styles.list}>
    <FlatList
      data={itemList}
      renderItem={({item}) => (
        <ListItem
          content={item.name}
          onPressItem={() => onPressItem(item.key)}
        />
      )}
    />
  </ScrollView>
);

export default PlaceList;

const styles = StyleSheet.create({
  list: {
    width: '100%',
  }
});