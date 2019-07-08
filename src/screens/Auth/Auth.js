import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class AuthScreen extends Component{
    static navigationOptions = {
        title: 'Auth'
    }
    
    onLoginHandler = () => {
        this.props.navigation.navigate('TabNavigation');
    }
    render() {
        const { navigation } = this.props.navigation;
        return(
            <View>
                <Text>Auth Screen</Text>
                <Button title="Login" onPress={ this.onLoginHandler }/>
            </View>
        );
    }
}

export default AuthScreen;