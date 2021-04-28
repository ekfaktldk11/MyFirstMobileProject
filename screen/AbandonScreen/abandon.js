import React, {Component} from 'react';
//import {headerLeft} from "@react-navigation"
import {Image,ImageBackground, SafeAreaView,StyleSheet, Text, View, style,ActivityIndicator} from 'react-native';
import {Icon} from 'native-base'; // for using some icons from vector-icons
import { FlatList } from 'react-native-gesture-handler';
 
function Item({desertionNo,age,sexCd,kindCd,neuterYn,careNm,careTel,happenDt,happenPlace,specialMark,popfile}){
    key = {desertionNo}
    return(
        <View style={{flexDirection : 'row'}}>
            <View style={{flex:7, flexDirection:'row', paddingTop: 10}}>
                <View style={{flex : 1}}>
                    <Text style={styles.listText}>  나이{"\n"}
                    {"  "}성별{"\n"}  품종{"\n"}  중성화 여부{"\n"}
                    {"  "}보호소{"\n"}  보호소 번호{"\n"}  접수일{"\n"}  발견 장소{"\n"}
                    {"  "}특징{"\n"}
                    </Text>
                </View>
                <View style={{flex : 3}}>
                    <Text style={styles.text}>{age}{"\n"}
                    {sexCd}{"\n"}{kindCd}{"\n"}{neuterYn}{"\n"}
                    {careNm}{"\n"}{careTel}{"\n"}{happenDt}{"\n"}{happenPlace}{"\n"}
                    {specialMark}{"\n"}
                    </Text>
                </View>
            </View>
            <View style={{flex:2, flexDirection:'row', paddingTop: 10}}>
                <Image resizeMode="contain" style={styles.icon} source={{uri:popfile}}/>
            </View>
        </View>
    )
}

var DOMParser = require('xmldom').DOMParser;
export default class AbdScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            DATA : [] // 객체 배열 생성
        }
    } 
    componentDidMount(){
        return fetch('http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?ServiceKey=ZrxWpXYf4fPdKrPobaESDZz44r%2FSfwySh%2F0h185OMrbrxgOPSoYXPiTtQBw1f8ZDPSUzUwPqnU8RIdLygbnrMQ%3D%3D')
        .then((response) => response.text())
        .then((data) => {
            var count = 0;
            var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
            //console.log(data); // 요청 xml 형태 그대로 콘솔창에 값을 띄워줌
            this.setState({
                isLoading: false,
                //datasource: xmldoc.getElementsByTagName("row"),
            })
            var x = xmlDoc.getElementsByTagName("item"); // <item></item> 형식의 모든 데이터를 x에 할당-> 벡터로

            for (var i = 0; i < x.length; i++){ // length 는 <row></row> 형태의 아이템 개수를 의미 -> <row></row> 형태의 아이템이 하나가아님
                //console.log(x[i].childNodes); 
                var nodeList = x[i].childNodes; // length 만큼의 매 반복마다 각 <row></row> 을 nodeList 에 할당
                // 1. 위에서 객체 배열용 하나 선언
                // 2. 여기서 객체 하나를 만듬
                // 3. 객체에 요소들을 채우고
                // 4. 마지막에 객체 배열에 여기서 생성된 객체를 추가
                var temp = {
                    count : null,
                    age : null,
                    sexCd : null,
                    kindCd : null,
                    neuterYn : null,
                    careTel : null,
                    careNm : null,
                    happenDt : null,
                    happenPlace : null,
                    specialMark : null,
                    popfile : null,
                    desertionNo : null
                };

                for(var j = 0; j < nodeList.length; j++){
                    // <row></row> 안에 있는 아이템의 길이만큼 반복하면서 data 값들을 순서대로 출력
                    var item = nodeList[j];
                    temp.count = count + 1;
                    // if (item.firstChild){ // firstChild =! childNodes[0]
                    //     console.log(item.nodeName+" : "+item.childNodes[0].nodeValue); 
                        
                    if(item.firstChild){
                        switch (item.nodeName){
                            case "age":
                                temp.age = item.childNodes[0].nodeValue;
                                break;
                            case "sexCd":
                                temp.sexCd = item.childNodes[0].nodeValue;
                                break;
                            case "kindCd":
                                temp.kindCd = item.childNodes[0].nodeValue;
                                break;
                            case "neuterYn":
                                temp.neuterYn = item.childNodes[0].nodeValue;
                                break;
                            case "careNm":
                                temp.careNm = item.childNodes[0].nodeValue;
                                break;
                            case "happenDt":
                                temp.happenDt = item.childNodes[0].nodeValue;
                                break;
                            case "careTel":
                                temp.careTel = item.childNodes[0].nodeValue;
                                break;
                            case "happenDt":
                                temp.happenDt = item.childNodes[0].nodeValue;
                                break;
                            case "happenPlace":
                                temp.happenPlace = item.childNodes[0].nodeValue;
                                break;
                            case "specialMark":
                                temp.specialMark = item.childNodes[0].nodeValue;
                                break;
                            case "popfile":
                                temp.popfile = item.childNodes[0].nodeValue;
                                break;
                            case "desertionNo":
                                temp.desertionNo = item.childNodes[0].nodeValue;
                                break;
                            default:
                                break;
                        }
                    }
                }
                console.log(temp);
                this.state.DATA.push(temp);
            }
        })
        .catch((error) => {
            console.log(error)
        });
    }
    static navigationOptions = {
        tabBarIcon: () => (
            <Icon name = 'ios-paw'/>
        )
    }
    FlatListItemSeparator = () => {
        return(
            <View style = {styles.separate}/>
        )
    }
    keyEx = (item) => item.desertionNo;
    render() {
            if(this.state.isLoading){
                return(
                <View styles={StyleSheet.container}>
                    <ActivityIndicator/>
                </View>
                )
            } else {
            return (
                <ImageBackground source={require('C:/Users/ekfak/Hupet/screen/background.png')} style = {styles.container}>
                    <FlatList
                        keyExtractor = {this.keyEx}
                        data = {this.state.DATA}
                        ItemSeparatorComponent = {this.FlatListItemSeparator}
                        renderItem={({item}) => (
                            <Item
                            age = {item.age}
                            sexCd = {item.sexCd}
                            kindCd = {item.kindCd}
                            neuterYn = {item.neuterYn}
                            careNm = {item.careNm}
                            careTel = {item.careTel}
                            happenDt = {item.happenDt}
                            happenPlace = {item.happenPlace}
                            specialMark = {item.specialMark}
                            popfile = {item.popfile}
                            desertionNo = {item.desertionNo}/>
                        )}/>
                </ImageBackground>
            );
        }
    }
}
// 만든 배경 투명화 and 적용 부터
const styles = StyleSheet.create({
    container: {
        flex : 1, //get all the space -> similar with a fuzzy set 
        //justifyContent: 'space-evenly',
        //marginTop: constants.StatusBar,
        //marginHorizontal: 16,
        //backgroundColor: "black",
      },
    icon: {
        //alignItems : 'center',
        //resizeMode : "contain",
        width: 100,
        height: 130,
    },
    wrapButton: {
        width: 50,
        height: 30,
    },
    listText: {
        //flex:1,
        fontWeight: 'bold',
        fontSize: 12,
        color: '#463f22',
        fontFamily: 'NanumGothic-Regular'
    },
    text: {
        //flex:3,
        fontSize: 12,
        color: '#463f22',
        fontFamily: 'NanumGothic-Regular'
    },
    item:{
        flex:1,
        //backgroundColor: 'black',
        flexDirection: 'row',
        //marginVertical: 8,
        //marginHorizontal: 16,
    },
    separate:{
        backgroundColor: 'gray',
        height: 0,
        width : '100%',
    },
  });

// icons : logo-,ios-,md-