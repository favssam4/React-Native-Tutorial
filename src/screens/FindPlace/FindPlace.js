import React, { Component } from 'react';
import { View, Button } from 'react-native';
import {  connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
    static navigationOptions = {
        title: 'Find Place',
        headerLeft: (
            <Ionicons style={{ marginLeft: 10}} name="md-menu" size={25}/>
        ) //todo: add handling
    }

    itemSelectedHandler = key => {
        const selPlace = this.props.places.find(place => {
            return place.key === key;
        });

        this.props.navigation.navigate('PlaceDetail', { selectedPlace: selPlace })
    }

    render() {
        return (
            <View>
                <PlaceList places={ this.props.places } OnItemSelected={ this.itemSelectedHandler }/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    };
};

export default connect(mapStateToProps)(FindPlaceScreen);