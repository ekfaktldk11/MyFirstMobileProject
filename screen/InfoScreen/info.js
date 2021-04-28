import React, {Component} from 'react';
//import {headerLeft} from "@react-navigation"
import {ImageBackground,StyleSheet, Text, View, Platform} from 'react-native';
import {Icon} from 'native-base'; // for using some icons from vector-icons

export default class InfoScreen extends Component{
    static navigationOptions = {
        tabBarIcon: () => (
            <Icon name = 'ios-information-circle-outline'/> 
        )
    }
    render() {
        return (
            <ImageBackground source={require('C:/Users/ekfak/Hupet/screen/background.png')}style = {styles.container}>
                <Text style={styles.word}>InfoScreen</Text>
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
    word:{
        fontSize : 12,
    }
});