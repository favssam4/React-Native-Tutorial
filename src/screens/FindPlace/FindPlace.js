import React, { Component } from 'react';
import { View } from 'react-native';
import {  connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
    static navigationOptions = {
        title: 'Find Place'
    }

    itemSelectedHandler = key => {
        const selPlace = this.props.places.find(place => {
            return place.key === key;
        });

        this.props.navigation.navigate('PlaceDetail', { selectedPlace: selPlace })
    }

    render() {
        const { navigation } = this.props.navigation;
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