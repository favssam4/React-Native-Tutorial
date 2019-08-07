import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/prairie.jpg';

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
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Please Log in</HeadingText>
                    </MainText> 
                    <Button title="Switch to Login" />
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your Email Address" style={styles.input}/>
                        <DefaultInput placeholder="Password" style={styles.input}/>
                        <DefaultInput placeholder="Confirm Password" style={styles.input}/>
                    </View>
                    <Button title="Submit" onPress={ this.onLoginHandler }/>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundImage : {
        width: "100%",
        flex: 1
    },
    textHeading: {
        fontSize: 28,
        fontWeight: "bold"
    },
    inputContainer : {
        width: "80%"
    },
    input : {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    }
});

export default AuthScreen;