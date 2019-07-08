import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const placeDetail = props => {
    return (
        <View style={styles.modalContainer}>
            <View>
                <TouchableOpacity onPress={props.OnItemDeleted}>
                    <View style={styles.deleteButton}>
                        <Ionicons name="ios-trash" size={32} color="red"></Ionicons>
                    </View>
                </TouchableOpacity>
                <Button title="Close" onPress={props.OnModalClosed}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    deleteButton: {
        alignItems: "center"
    }
});

export default placeDetail;