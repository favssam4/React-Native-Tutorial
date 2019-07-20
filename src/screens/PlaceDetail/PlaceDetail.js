import React, { Comp } from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index';

class PlaceDetail extends React.Component {
    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.navigation.getParam('selectedPlace','').key);
        this.props.navigation.goBack();
    }

    render() {
        const { state } = this.props.navigation;

        return(
            <View style={styles.modalContainer}>
            <View>
                <Image source={state.params.selectedPlace.image} style={styles.placeImage} />
                { console.log(state.params.selectedPlace.value)}
                { console.log(state.params.selectedPlace.key)}
                <Text style={styles.placeName}>{state.params.selectedPlace.value}</Text>
                <TouchableOpacity onPress={this.placeDeletedHandler}>
                    <View style={styles.deleteButton}>
                        <Ionicons name="ios-trash" size={32} color="red"></Ionicons>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}

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

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    };
};
export default connect(null, mapDispatchToProps)(PlaceDetail);