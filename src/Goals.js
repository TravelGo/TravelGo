import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
            <TstopList />
        </View>
    );
  }
}

class TstopList extends Component {
  render() {
    return (
        <View
            style={{flex: 10, backgroundColor: '#ABCDEF', alignSelf: 'stretch'}}
        >
            <ScrollView style={{flexDirection: 'column',backgroundColor: 'white', padding:5}}>
                <View style={styles.rowStyle}>
                    <View style={styles.view}>
                        <Text style={styles.goal}>트레블 스탑 1개 탐사</Text>
                        <Image source={require("../images/clearedStar.png")} style={styles.star}/>
                    </View>
                </View>
                <View style={styles.rowStyle}>
                    <View style={styles.view}>
                        <Text style={styles.goal}>트레블 스탑 3개 탐사</Text>
                        <Image source={require("../images/clearedStar.png")} style={styles.star}/>
                    </View>
                </View>
                <View style={styles.rowStyle}>
                    <View style={styles.view}>
                        <Text style={styles.goal}>트레블 스탑 5개 탐사</Text>
                        <Image source={require("../images/unclearedStar.png")} style={styles.star}/>
                    </View>
                </View>
                <View style={styles.rowStyle}>
                    <View style={styles.view}>
                        <Text style={styles.goal}>방명록 1개 작성</Text>
                        <Image source={require("../images/clearedStar.png")} style={styles.star}/>
                    </View>
                </View>
                <View style={styles.rowStyle}>
                    <View style={styles.view}>
                        <Text style={styles.goal}>방명록 3개 작성</Text>
                        <Image source={require("../images/clearedStar.png")} style={styles.star}/>
                    </View>
                </View>
                <View style={styles.rowStyle}>
                    <View style={styles.view}>
                        <Text style={styles.goal}>방명록 5개 작성</Text>
                        <Image source={require("../images/clearedStar.png")} style={styles.star}/>
                    </View>
                </View>
                <View style={styles.rowStyle}>
                    <View style={styles.view}>
                        <Text style={styles.goal}>방명록 10개 작성</Text>
                        <Image source={require("../images/unclearedStar.png")} style={styles.star}/>
                    </View>
                </View>
                <View style={styles.rowStyle}>
                    <View style={styles.view}>
                        <Text style={styles.goal}>트레블 스탑 1개 탐사</Text>
                        <Image source={require("../images/clearedStar.png")} style={styles.star}/>
                    </View>
                </View>
                <View style={styles.rowStyle}>
                    <View style={styles.view}>
                        <Text style={styles.goal}>출석체크 1번</Text>
                        <Image source={require("../images/clearedStar.png")} style={styles.star}/>
                    </View>
                </View>
                <View style={styles.rowStyle}>
                    <View style={styles.view}>
                        <Text style={styles.goal}>출석체크 3번</Text>
                        <Image source={require("../images/clearedStar.png")} style={styles.star}/>
                    </View>
                </View>
                <View style={styles.rowStyle}>
                    <View style={styles.view}>
                        <Text style={styles.goal}>출석체크 5번</Text>
                        <Image source={require("../images/unclearedStar.png")} style={styles.star}/>
                    </View>
                </View>
            </ScrollView>
        
        
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  view: {
    flex: 1,
    margin: 1,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: '#fec536',
    height: 60, 
    flexDirection: 'row', 
    alignItems:'center',
    justifyContent:'space-between'
  },

  rowStyle: {
    marginRight: 5,
    marginLeft: 5,
    flex: 1,
    flexDirection: 'row',
  },
  goal: {
    color: '#4c4c4c', 
    fontSize: 25, 
    fontWeight: 'bold', 
    alignItems:'flex-start', 
    width:250, 
    paddingLeft: 15
  },
  star: {
    width:50, 
    height:50, 
    resizeMode:'contain', 
    alignItems:'flex-end'
  }

});