import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import AbdScreen from '../AbandonScreen/abandon';
import GlryScreen from '../GalleryScreen/gallery';
import InfoScreen from '../InfoScreen/info';
import NewsScreen from '../NewsScreen/news';
import HuScreen from '../HupetScreen/hu';

const Tab = createMaterialTopTabNavigator();

function Hupet() {
  return (
    <Tab.Navigator initialRouteName="Hupet" // navigate 할때 initialRouteName 사용
    tabBarPosition = "bottom"
    tabBarOptions={{
      activeTintColor: '#e4cf83',
      showLabel: false,
      showIcon: true,
      labelStyle: {fontSize:12},
      style: {backgroundColor : '#ded390'},
    }}>
      <Tab.Screen name = "Door"
      component={HuScreen}
      options={HuScreen.navigationOptions}
      />
      <Tab.Screen name = 'News'
      component={NewsScreen}
      options={NewsScreen.navigationOptions}
      />
      <Tab.Screen name = "유기 동물 현황"
      component={AbdScreen}
      options={AbdScreen.navigationOptions}
      />
      <Tab.Screen name = 'Gallery'
      component={GlryScreen}
      options={GlryScreen.navigationOptions}
      />
      <Tab.Screen name = "Info"
      component={InfoScreen}
      options={InfoScreen.navigationOptions}
      />
  </Tab.Navigator>
  );
}

export default Hupet;
//**The above is a example of AppStackNavigator
// stack navigator 항목에는 MainScreen이 있고 그 위에 bottomtabnavigator를 얹는 방식
// 
