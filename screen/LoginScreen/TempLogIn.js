import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';
//const screenUri = 'https://pixabay.com/get/5ee3dd414253b10ff3d8997cc22f327f1136d6f85254794f742973d59049_640.jpg'
export default class TempScreen extends Component {
    //const [value, onChangeText] = React.useState('');
    static navigationOptions = {
        headerShown: false,
    };
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            pw: ""
        }
    }

    // pushSignUp(){
    //     this.props.navigator.push({
    //         screen: '',
    //         title: 'SignUp',
    //         passProps: {}, // Pass object that will be used in the pushed screen
    //     })
    // }
    // pushLogIn(){
    //     this.props.navigator.push({
    //         screen: '',
    //         title: 'LogIn',
    //         passProps: {}, // Pass object that will be used in the pushed screen
    //     })
    // }
    // pushFindPw(){
    //     this.props.navigator.push({
    //         screen: '',
    //         title: 'FindPw',
    //         passProps: {}, // Pass object that will be used in the pushed screen
    //     })
    // }
    render() {
        const { navigate } = this.props.navigation // !!!!! 중요 !!!!!
        return (
            <KeyboardAvoidingView behavior={{ 'padding': null }} style={styles.container}>
                <ImageBackground style={styles.topImage} source={require('./initialscreen.jpg')}>
                    <View style={{flex : 1}}>
                        <View style={styles.space_1} />
                        <View style={styles.title}>
                            <Text style={{ fontSize: 30, color: '#505054', fontFamily: 'NanumGothic-Regular' }}>Login To Hupet</Text>
                        </View>
                    </View>
                    <View style={styles.loginContainer}>
                        <TextInput style={styles.input}
                            value={this.state.id}
                            onChangeText={(text) => this.setState({ id: text })}
                            placeholder={'아이디를 입력해주세요'}
                            maxLength={20}
                            multiline={false}
                        />
                        <TextInput style={styles.input}
                            value={this.state.pw}
                            onChangeText={(text) => this.setState({ pw: text })}
                            placeholder={'비밀번호를 입력해주세요'}
                            maxLength={12}
                            multiline={false}
                        />
                    </View>
                    <View style={styles.space_2} />
                    <View style={styles.space_2} />
                    <View style={styles.Login}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#add9ad' }]}
                            onPress={() => navigate('LogIn')}>
                            <Text style={styles.buttonText}> Log In </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#add9ad' }]}
                            onPress={() => navigate('SignUp')}>
                            <Text style={styles.buttonText}> Sign Up </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#add9ad' }]}
                            onPress={() => navigate('Hupet')}>
                            <Text style={styles.buttonText}> Forget Password? </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebe5cb'
    },
    topImage: { // in container -> 나머지 컨테이어 안에 있는 스크린 차지는 height임 -> 100% - height로 받은 것들 % 만큼 이놈이 가져갈거임
        flex: 2,
        resizeMode: 'cover',
        opacity: 0.8,
        borderRadius: 5
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    space_1: {
        width: '100%',
        height: '15%'
    },
    space_2: {
        width: '100%',
        height: '4%',
    },
    Login: { // in container -> 20%
        flex: 1,
    },
    title: { // in container -> 20%
        marginLeft: 10,
        alignItems: 'flex-start',
        width: '100%',
        height: '20%'
    },
    button: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        borderRadius: 10,
    },
    word: {
        fontSize: 12,
        fontFamily: 'NanumGothic-Regular'
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        width: '80%',
        alignSelf : 'center',
        margin: 5,
        fontSize : 20,
        fontFamily: 'NanumGothic-Regular'
    },
    buttonText: {
        color: '#707370',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'NanumGothic-Regular'
    }
});