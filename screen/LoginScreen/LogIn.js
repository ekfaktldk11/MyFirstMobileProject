import React, {Component} from 'react';
//import {headerLeft} from "@react-navigation"
import {ImageBackground,TextInput,StyleSheet, Text, View, Platform} from 'react-native';
import {Icon} from 'native-base'; // for using some icons from vector-icons

export default class LogInScreen extends Component{
    static navigationOptions = {
        headerShown: false,
    };
    constructor(props){
        super(props);
        this.state = {
            id : "",
            pw : ""
        }
    }
    render() {
        return (
            <View style = {styles.container}>
            
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
    
});
//fontFamily: 'NanumGothic-Regular'