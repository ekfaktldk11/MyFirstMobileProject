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
            pw: "",
            pwConfirm: "",
            sex: 0, // boolean if 0 -> female / 1-> male
            nickName: "",
            age: '',
            // 생년월일 기능 추가 .. ? 
        }
    }
    // getAge(dateString) {
    //     var today = new Date();
    //     var birthDate = new Date(dateString);
    //     var age = today.getFullYear() - birthDate.getFullYear();
    //     var m = today.getMonth() - birthDate.getMonth();
    //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //         age--;
    //     }
    //     return age;
    // }

    render() {
        return (
            <KeyboardAvoidingView behavior={{ 'padding': null }} style={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={styles.topSpace} />
                    <View>
                        <Text style={{ fontSize: 35, paddingBottom: 20, fontFamily: 'NanumGothic-Regular' }}> 간편 회원가입</Text>
                        <View style={{ width: '100%', borderBottomWidth: 0.5, borderColor: '#444' }} />
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.listText}>  아이디{"\n"}</Text>
                        <TextInput style={styles.input}
                            value={this.state.id}
                            onChangeText={(text) => this.setState({ id: text })}
                            placeholder={'아이디'}
                            maxLength={20}
                        />
                    </View>
                    <View style={styles.space} />
                    <View style={styles.textBox}>
                        <Text style={styles.listText}>  비밀번호{"\n"}</Text>
                        <TextInput style={styles.input}
                            value={this.state.pw}
                            onChangeText={(text) => this.setState({ pw: text })}
                            placeholder={'비밀번호'}
                            maxLength={16}
                        />
                    </View>
                    <View style={styles.space} />
                    <View style={styles.textBox}>
                        <Text style={styles.listText}>  비밀번호 확인{"\n"}</Text>
                        <TextInput style={styles.input}
                            value={this.state.pwConfirm}
                            onChangeText={(text) => this.setState({ pwConfirm: text })}
                            placeholder={'비밀번호 확인'}
                            maxLength={16}
                        />
                    </View>
                    <View style={styles.space} />
                    <View style={styles.textBox}>
                        <Text style={styles.listText}>  닉네임{"\n"}</Text>
                        <TextInput style={styles.input}
                            value={this.state.nickName}
                            onChangeText={(text) => this.setState({ nickname: text })}
                            placeholder={'닉네임'}
                            maxLength={16}
                        />
                    </View>
                    <View style={styles.space} />
                    <View style={styles.textBox}>
                        <Text style={styles.listText}>  성별{"\n"}</Text>
                        <TextInput style={styles.input}
                            value={this.state.id}
                            onChangeText={(text) => this.setState({ sex: text })}
                            placeholder={'성별'}
                            maxLength={20}
                        />
                    </View>
                    <TouchableOpacity
                        style={{ borderColor : 'gray'}}
                        onPress={() => alert('회원가입이 완료되었습니다!')}>
                        <Text style={styles.submit} > 제  출  하  기 </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
// 이미지 넣으면 항상 위아래 공백 (padding) 생기는 문제 해결.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ded390'
    },
    topSpace: {
        width: '100%',
        height: '5%'
    },
    space: {
        width: '100%',
        height: '2%'
    },
    textBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
    },
    word: {
        fontSize: 12,
        fontFamily: 'NanumGothic-Regular',
    },
    listText: {
        //fontWeight: 'bold',
        fontSize: 15,
        color: '#463f22',
        paddingTop: 15,
        fontFamily: 'NanumGothic-Bold'
    },
    input: {
        borderColor: '#aaa',
        width: '70%',
        height: 35,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        fontFamily: 'NanumGothic-Regular'
    },
    buttonText: {
        color: '#707370',
        fontSize: 20,
        fontFamily: 'NanumGothic-Regular'
    },
    submit: {
        alignSelf: 'center',
        fontWeight: 'bold',
        margin: 15,
        fontSize: 20,
        color: 'white',
        fontFamily: 'NanumGothic-Regular',
        borderColor: 'gray'
    }
});