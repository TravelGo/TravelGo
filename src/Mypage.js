import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Icon, TouchableOpacity, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import MyPage_Stops from "./MyPage_Stops";
const JEnum = require("./JEnum")

export default class Mypage extends React.Component {

  grade = {
    0 : "배낭 없는 지렁이",
    30 : "좀 다녀본 개구리",
    100 : "여유로운 고양이",
    300 : "여행 전문 호랑이",
    500 : "투어 본좌 용두리",
    2147483647 : ""
  }

  constructor(props) {
    super(props);

    JEnum.axios.get(JEnum.visited + this.props.userID)
    .then(res => {
      let grade = "";
      let level = 0;
      for(let i=0;i<Object.keys(this.grade);i++) {
        if(JEnum.visited.length <= Object.keys(this.grade)[i]) {
          grade = this.grade[Object.keys(this.grade)[i]]
          level = i;
          break;
        }
      }
      this.setState({
        cov : JEnum.visited.length,
        visited : res.data,
        grade : grade,
        level : level
      })
    });
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
              <Text style={{color: 'black', fontSize: 15, textDecorationLine: 'underline'}}>{this.state.grade}</Text>
            </View>
            <View style={{flex: 1}}></View>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: "row", backgroundColor: "#00afff", paddingRight: 10, paddingLeft: 10}}>

          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{backgroundColor: 'white', borderRadius: 5, width: 50, height: 20, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#00afff', fontSize: 15}}>
                Lv. {this.state.level}
              </Text>
            </View>
          </View>

          <View style={{flex: 4, backgroundColor: '#00afff', flexDirection: 'column', }}>
            <View style={{flex: 1, justifyContent:'flex-end' }}>
              <Progress.Bar progress={0.33} width={260} color={'#FFBF00'} unfilledColor={'white'} borderColor={'#109eff'} />
            </View>
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
              <Text style={{color: 'white', fontSize: 12}}>
                {this.state.} / 240
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex:11.5}}>
          <MyPage_Stops userID={this.props.userID}/>
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
