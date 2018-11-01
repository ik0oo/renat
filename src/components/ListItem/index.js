import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default ({ content, onPressItem }) => (
    <TouchableOpacity onPress={onPressItem}>
        <View style={styles.item}>
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
        width: '100%',
        alignItems: 'flex-start',
    },
});