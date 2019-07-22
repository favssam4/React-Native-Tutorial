import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import { Ionicons } from '@expo/vector-icons';

class SharePlaceScreen extends Component {
    static navigationOptions = {
        title: 'Share Place',
        headerLeft: (
            <Ionicons style={{ marginLeft: 10}} name="md-menu" size={25}/>
        ) //todo: add handling
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