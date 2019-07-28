import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import { Ionicons } from '@expo/vector-icons';

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
            <View>
                <PlaceInput onPlaceAdded={ this.placeAddedHandler }/>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);