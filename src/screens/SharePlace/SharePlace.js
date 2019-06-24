import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SharePlaceScreen extends Component {
    static navigationOptions = {
        title: 'Find Place'
    }
    render() {
        const { navigation } = this.props.navigation;
        return (
            <View>
                <Text>On SharePlaceScreens</Text>
            </View>
        );
    }
}

export default SharePlaceScreen;