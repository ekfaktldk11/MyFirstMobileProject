import React, {Component} from 'react';
//import {headerLeft} from "@react-navigation"
import {StyleSheet, Text, View, Platform} from 'react-native';
import {Icon} from 'native-base'; // for using some icons from vector-icons
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';


//export default 는 외부 js 파일에서 사용하기 위한 선언 ~~
export default class MainScreen extends Component {
    static navigationOptions = {
        headerStyle : {
            backgroundColor: '#ded390'
        },
        headerLeft: () =>  (<Icon name='ios-share' style= {{padding : 10}}/>),
        headerRight: () => (<Icon name='settings' style={{paddingRight:10}}/>),
        headerTitleAlign: 'center',
    };

    render() {
        return (
            <View style = {styles.container}>
                <Text>MainScreen</Text>
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
// 헤더 꾸미기 부터 다시 ~
