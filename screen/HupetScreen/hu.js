import React, { Component } from 'react';
//import {headerLeft} from "@react-navigation"
import { ListView, ActivityIndicator, SafeAreaView, ImageBackground, StyleSheet, ScrollView, Image, FlatList, Text, View, Platform, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Icon } from 'native-base'; // for using some icons from vector-icons

const numColumns = 3;
const size = Dimensions.get('window').width / numColumns;
export default class InfoScreen extends Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Icon name='ios-nutrition' />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      DATA: []
    }
  }
  //https://pixabay.com/api/?key=15751498-b35ef2f589aead590c6cbfeb8&q=animal&per_page=3
  componentDidMount() {
    return fetch('https://pixabay.com/api/?key=15751498-b35ef2f589aead590c6cbfeb8&q=pet&order=latest&per_page=21&safesearch=true')
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson.hits)
        this.setState({
          isLoading: false,
          dataSource: responseJson.hits,
          // "hits" 에 해당하는 []안의 값들을 dataSource 에 .. 
        })
        //const obj = JSON.parse(this.state.dataSource);
        // DATA 엔 잘들어가는데 화면에 안나옴 ;;;
        this.state.dataSource.map((val, key) => {
          var temp = {
            id: null,
            imageURL: null,
          }
          key = {key}
          temp.id = val.id
          temp.imageURL = val.webformatURL
          this.state.DATA.push(temp)
        })
        console.log(this.state.DATA)
      })
      .catch((error) => {
        //console.log(error)
      })
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1 }}>
          <ActivityIndicator />
        </View>
      )
    } else {
      //console.log(this.state.DATA)
      // let shots = this.state.dataSource.map((val, key) => {
      //   return <View style={{ flex: 1 }} key={key} style={styles.item}><Image resizeMode='contain' style={styles.icon} source={{ uri: val.webformatURL }} /></View>
      // });
      return (
        <FlatList
          data={this.state.DATA}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image resizeMode='cover' style={styles.icon} source={{ uri: item.imageURL }} />
            </View>
          )}
          keyExtractor={item => item.id}
          numColumns={numColumns} />
      );
      // 그 fetch 코드 비교해보고 고치자 계속 key identifier 불구에다가 같은 값만 나온다!
    }
  }
}

//https://pixabay.com/api/?key=15751498-b35ef2f589aead590c6cbfeb8&q=animal


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    //justifyContent: 'center',
  },
  item: {
    paddingBottom: 1,
    paddingTop: 1,
    paddingLeft: 1,
    paddingRight: 1,
    flex: 1,
    width: size,
    height: size,
    //alignSelf: 'stretch',
    //margin: 40,
    //alignItems: 'center',
    //borderBottomWidth: 1,
    //borderBottomColor: '#eee',

  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  icon: {
    flex: 1,
    //width: '100%',
    //height: '100%'
  },
});