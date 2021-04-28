import React, {Component} from 'react';
//import {headerLeft} from "@react-navigation"
import {ImageBackground,StyleSheet, Text, View, Platform} from 'react-native';
import {Icon} from 'native-base'; // for using some icons from vector-icons

export default class FindPwScreen extends Component{
    static navigationOptions = {
        headerShown: false,
    };
    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.word}>InfoScreen</Text>
            </View>
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