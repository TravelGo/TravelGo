import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Icon, TouchableOpacity, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import MyPage_Stops from "./MyPage_Stops";
import ButtonMap from "./ButtonMap_MyPage";


export default class Mypage extends React.Component {
  Screen = { 
    "ButtonMap" : ButtonMap,
    "travelstop" : MyPage_Stops,
  }
  state = {
    "currentPage" : this.Screen[Object.keys(this.Screen)[0]]
  }

  _goToMap = (e) => {
    this.setState({
      currentPage : this.Screen[e]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => this.props.change('setting')} style={{width:30}}>
            <Image source={require("../images/goBackButton.png")} style={{width:30, height: 30, resizeMode: 'contain'}}/>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>마이페이지</Text>
          <View style={{width:30}}></View>
        </View>
        <View style={{flex: 1, backgroundColor: "#00afff", }}>
          <View style={styles.secondBar}>
            <View style={{flex: 1, width: 10, height: 20,  backgroundColor: '#74DF00', justifyContent: "center", alignItems: "center"}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 10}}>칭호</Text>
            </View>
            <View style={{flex: 10, justifyContent: "center", alignItems: "center"}}>
              <Text style={{color: 'black', fontSize: 15, textDecorationLine: 'underline'}}>연못 속의 개구리</Text>
            </View>            
            <View style={{flex: 1}}></View>
          </View>
        </View>        
        <View style={{flex: 1, flexDirection: "row", backgroundColor: "#00afff", paddingRight: 10, paddingLeft: 10}}>
          
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{backgroundColor: 'white', borderRadius: 5, width: 50, height: 20, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#00afff', fontSize: 15}}>
                Lv. 4
              </Text>
            </View>
          </View>

          <View style={{flex: 4, backgroundColor: '#00afff', flexDirection: 'column', }}>          
            <View style={{flex: 1, justifyContent:'flex-end' }}>
              <Progress.Bar progress={0.33} width={260} color={'#FFBF00'} unfilledColor={'white'} borderColor={'#109eff'} />
            </View>
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
              <Text style={{color: 'white', fontSize: 12}}>
                80 / 240
              </Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', flex: 0.7, height: 55, flexDirection: 'row', alignItems:'center', }}> 
          <TouchableOpacity onPress={() => { this._goToMap("ButtonMap"); }} style={{height: 48, borderColor: '#00afff', borderWidth: 1.5, borderRadius: 8, flex: 1}}>{ 
            <Text style={{ fontSize: 17, color : '#00afff', marginTop: 14.5,textAlign: 'center', fontWeight: 'bold'}}>
              트레블 맵 
            </Text>
          }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this._goToMap("travelstop"); }} style={{height: 48, borderColor: '#00afff', borderWidth: 1.5, borderRadius: 8, flex: 1}}>{ 
            <Text style={{ fontSize: 17, color : '#00afff', marginTop: 14.5,textAlign: 'center', fontWeight: 'bold'}}>
            트레블 스탑 
            </Text>
          }
          </TouchableOpacity>
        </View>
        <View style={{flex:11.5}}>
          <this.state.currentPage/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  topBar: {
    paddingHorizontal: 15,
    justifyContent:'space-between',
    backgroundColor: '#00afff',
    height: 60,
    flexDirection: 'row',
    alignItems:'center'
  },
  secondBar: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center", 
  }
});