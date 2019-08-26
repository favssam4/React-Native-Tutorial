import React, { Component } from 'react';
import { View, TouchableOpacity, Button, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import { Ionicons } from '@expo/vector-icons';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

class SharePlaceScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Share Place',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons style={{ marginLeft: 10}} name="md-menu" size={25}/>
                </TouchableOpacity>
            )//todo refactor to common with SharePlace/FindPlace
        };
    }

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName)
    }

    render() {
        const { navigation } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Share a Place with us!</HeadingText>
                    </MainText> 
                    <PickImage />
                    <PickLocation />
                    <PlaceInput />
                    <View style={styles.button}>
                        <Button title="Share the Place!" />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);