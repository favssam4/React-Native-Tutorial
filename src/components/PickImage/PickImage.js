import React, { Component } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

import prairie from '../../assets/prairie.jpg';

class PickImage extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.placeHolder}>
                    <Image source={prairie} style={styles.imageHolder} />
                </View>
                <View style={styles.button}>
                    <Button title="Pick Image" onPress={() => alert('Pick Image')}/>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    placeHolder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
        margin: 8
    },
    imageHolder: {
        width: "100%",
        height: "100%"
    }
});

export default PickImage;