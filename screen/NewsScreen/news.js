import React, {Component} from 'react';
//import {headerLeft} from "@react-navigation"
import {ImageBackground,StyleSheet, Text, View, Platform} from 'react-native';
import {Icon} from 'native-base'; // for using some icons from vector-icons

export default class NewsScreen extends Component{
    static navigationOptions = {
        tabBarIcon: () => (
            <Icon name = 'md-person'/> 
        )
    }
    render() {
        return (
            <ImageBackground source={require('C:/Users/ekfak/Hupet/screen/background.png')} style = {styles.container}>
                <Text>SNS</Text>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});