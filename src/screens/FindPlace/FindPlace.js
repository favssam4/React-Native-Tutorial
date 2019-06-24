import React, { Component } from 'react';
import { View, Text } from 'react-native';

class FindPlaceScreen extends Component {
    static navigationOptions = {
        title: 'Find Place'
    }
    render() {
        const { navigation } = this.props.navigation;
        return (
            <View>
                <Text>On FindPlaceScreen</Text>
            </View>
        );
    }
}

export default FindPlaceScreen;