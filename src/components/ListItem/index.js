import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import defaultIcon from '../../../assets/58873055-white-place-icon-on-blue-button-isolated-on-white.jpg';

export default ({ content, onPressItem, icon }) => (
    <TouchableOpacity onPress={onPressItem}>
        <View style={styles.item}>
            <Image source={icon || defaultIcon} style={styles.image} />
            <Text style={{fontSize: 20}}>{content}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    item: {
        padding: 5,
        marginBottom: 3, 
        backgroundColor: '#eee',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    image: {
        width: 20,
        height: 20,
        marginRight: 10,
    }
});