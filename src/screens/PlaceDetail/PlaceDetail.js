import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const placeDetail = props => {
    const { state } = props.navigation;
    return (
        <View style={styles.modalContainer}>
            <View>
                <Image source={state.params.selectedPlace.image} style={styles.placeImage} />
                <Text style={styles.placeName}>{state.params.selectedPlace.value}</Text>
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