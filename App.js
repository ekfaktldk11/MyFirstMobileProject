import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './screen';
import SignUpScreen from './screen/LoginScreen/sign_up';
import FindPwScreen from './screen/LoginScreen/find_pw';
import Hupet from './screen/Tapnavigator/index'
import TempScreen from './screen/LoginScreen/TempLogIn'
import LogInScreen from './screen/LoginScreen/LogIn'
import {StyleSheet, Text, View, Platform} from 'react-native';
import {Icon} from 'native-base';
import News from './screen/NewsScreen/news';


const Stack = createStackNavigator();
// 로그인 스택 네비게이터 만들고 ~ 밑에 스택에 추가..?
function Login(){
  return(
    <Stack.Navigator initialRouteName = 'Temp'
    >
    <Stack.Screen name = 'Temp'
    component = {TempScreen}
    options={TempScreen.navigationOptions}
    />
    <Stack.Screen name = 'SignUp'
    component = {SignUpScreen}
    options={SignUpScreen.navigationOptions}
    />
    <Stack.Screen name = 'LogIn'
    component = {LogInScreen}
    options={LogInScreen.navigationOptions}
    />
    <Stack.Screen name = 'FindPw'
    component = {FindPwScreen}
    optioins={FindPwScreen.navigationOptions}
    />
  </Stack.Navigator>
  )
}
// login 화면으로 연결해서 또 앱 오류나면 .. 업글제대로 해보자

function AppStackNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="InitScreen"
    screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen name = "InitScreen"
      component={Login}
      options={{headerShown: false}}
      />
      <Stack.Screen name = "Hupet"
      component={Hupet} // ***
      options={MainScreen.navigationOptions}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default AppStackNavigator;
//**The above is a example of AppStackNavigator
// stack navigator 항목에는 MainScreen이 있고 그 위에 bottomtabnavigator를 얹는 방식
// 
