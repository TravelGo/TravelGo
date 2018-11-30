import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, ScrollView, Button, View, Image, Dimensions, RefreshControl, TouchableOpacity } from 'react-native';
const JEnum = require('./JEnum.js');
const timeAgo = require('node-time-ago');

export default class GuestBook extends Component {

  constructor(props) {
    super(props);
    const { width, height } = Dimensions.get("window")
    this.state = {
      width,
      height,
      refreshing: false,
      stop: "Travel",
      boardnum: 0,
      guestbooks: [],
      comment : "",
      comments : []
    }
    this.load();
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.load();
    this.setState({ refreshing: false });
  };

  write = () => {
    JEnum.axios.put(JEnum.comment + this.props.travelStopId, {
      user : this.props.userID,
      body : this.state.comment
    })
    .then(res => {
      if(res.data.status) {
        this.setState({
          comment : ""
        })
        this.load();
      } else {
        alert("Error Occured");        
      }
    })
  }

  load() {
    JEnum.axios.get(JEnum.comment + this.props.travelStopId)
    .then(res => {
      if(res.data.status) {
        this.setState({
          comments : res.data.data
        })
      }
    })
  }

  render() {
    const comments = []
    for(let i=0;i<this.state.comments.length;i++) {
      comments.push((
        <View style={styles.board}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 3 }}>
            <Text style={{ fontSize: 15, fontWeight: '800', color: '#ff5959' }}>{this.state.comments[i].user}</Text>
          </View>
          <Text style={{ color: '#313131', marginBottom: 5 }}>{this.state.comments[i].body}</Text>
          <View style={{ paddingRight: 5, alignItems: 'baseline', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#D3D3D3', fontSize: 10 }}>{timeAgo(this.state.comments[i].date)}</Text>
          </View>
        </View>
      ))
    }
    return (
      <View style={{ flex: 1 }}>



        <View style={{ paddingHorizontal: 15, justifyContent: 'space-between', backgroundColor: '#00AFFF', height: 60, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => { this.props.change('travelStop'); }} style={{ width: 30 }}>
            <Image source={require("../images/goBackButton.png")} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>방명록</Text>
          <View style={{ width: 30 }}></View>
        </View>

        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh} />
          }
        >

          <View style={{padding: 10 , flexDirection:'column'}}>
            <Text style={{fontSize:15}}># 방명록 작성</Text>
            <TextInput multiline={true} style={styles.TextInput_style} value={this.state.comment} placeholder='방명록 작성하기' onChangeText={(value) => {this.setState({comment:value})}}></TextInput>
            <TouchableOpacity onPress={this.write} style={{alignSelf:'flex-end'}}>
              <View style={{ backgroundColor: '#00AFFF', width: 85, borderRadius: 5, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}> WRITE </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{paddingLeft: 10, paddingRight: 10 }}>
            <View>
              {comments}
            </View>
          </View>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  TextInput_style: {
    backgroundColor : '#EEEEEE',
    width : Dimensions.get('window').width - 20,
    height : 100,
    paddingLeft : 10,
    marginBottom : 5,
    marginTop : 5
  },

  ScrollItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    margin: 2,
  },

  T_Title: {
    height: 60,
    backgroundColor: '#00AFFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  T_Title_Text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  board: {
    borderWidth: 1,
    borderColor: '#00AFFF',
    borderRadius: 8,
    padding: 20,
    paddingBottom :20,
    marginBottom: 10
  }


});
