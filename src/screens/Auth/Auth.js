import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AuthScreen extends Component{
    static navigationOptions = {
        title: 'Auth screen'
    }
    render() {
        const { navigation } = this.props.navigation;
        return(
            <View>
                <Text>Auth Screen</Text>
            </View>
        );
    }
}

export default AuthScreen;