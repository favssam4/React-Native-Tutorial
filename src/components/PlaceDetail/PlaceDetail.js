import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = props => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage}/>
                <Text style={styles.placeName}>{ props.selectedPlace.value }</Text>
            </View>
        );
    }
    return (
        <Modal visible={props.selectedPlace !== null} 
               onRequestClose={props.OnModalClosed}
               animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title="Delete" color="red" onPress={props.OnItemDeleted}/>
                    <Button title="Close" onPress={props.OnModalClosed}/>
                </View>
            </View>
        </Modal>
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
    }
});

export default placeDetail;