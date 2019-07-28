import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import {  connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Find Place',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons style={{ marginLeft: 10}} name="md-menu" size={25}/>
                </TouchableOpacity>
            )//todo refactor to common with SharePlace/FindPlace
        };
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