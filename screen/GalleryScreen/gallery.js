import React, {Component} from 'react';
//import {headerLeft} from "@react-navigation"
import {ImageBackground,StyleSheet, Text, View, Platform} from 'react-native';
import {Container, Content, Icon} from 'native-base'; // for using some icons from vector-icons
import CardBox  from './card';

export default class GlryScreen extends Component{
    static navigationOptions = {
        tabBarIcon: () => (
            <Icon name = 'ios-photos'/> 
        )
    }
    render() {
        return (
            <Container style={style.container}>
                <Content>
                    <CardBox />
                </Content>
            </Container>
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});