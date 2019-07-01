import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {  connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
    static navigationOptions = {
        title: 'Find Place'
    }
    render() {
        const { navigation } = this.props.navigation;
        return (
            <View>
                <PlaceList places={ this.props.places }/>
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