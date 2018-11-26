import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, ScrollView, Button, View, Image, Dimensions, RefreshControl, TouchableOpacity } from 'react-native';

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
    }
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.import_json();
    this.setState({ refreshing: false });
  };


  import_json_url(stopname) {
    var guestbook = [];

    fetch('http://35.231.168.105/travelstop/37.610304/126.996917?ID=' + props.ID)
      .then(response => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        for (i = 0; i < responseJson.length(); i++) {
          guestbook.push(
            <View style={{ height: 85, borderWidth: 2, borderColor: '#841584', borderRadius: 10, padding: 5, marginBottom: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 3 }}>
                <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Regular_quadrilateral.svg/220px-Regular_quadrilateral.svg.png' }} style={{ width: 20, height: 20 }} resizeMode='center' />
                <Text style={{ fontSize: 10, fontWeight: '800', color: '#841584' }}>{responseJson[i].writer}</Text>
              </View>
              <Text style={{ color: '#00BFFF', marginLeft: 10, marginBottom: 5 }}>{responseJson[i].memo}</Text>
              <View style={{ paddingLeft: 10, paddingRight: 5, alignItems: 'baseline', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#D3D3D3', fontSize: 10 }}>{responseJson[i].timestamp}</Text>
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                  <Text style={{ borderWidth: 1, borderColor: '#00BFFF', borderRadius: 7, paddingHorizontal: 5 }}>{responseJson[i].like}</Text>
                  <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/1200px-Bot%C3%B3n_Me_gusta.svg.png' }}
                    style={{ marginLeft: 5, width: 25, height: 25 }} resizeMode='center'>
                  </Image>
                </View>
              </View>
            </View>
          )
        }
      })
      .catch(error => alert(error));

    this.setState({ guestbooks: guestbook });
  }

  import_json() {
    var guestbook = this.state.guestbooks;
    guestbook.push(
      <View style={styles.board}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 3 }}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Regular_quadrilateral.svg/220px-Regular_quadrilateral.svg.png' }} style={{ width: 20, height: 20 }} resizeMode='center' />
          <Text style={{ fontSize: 10, fontWeight: '800', color: '#841584' }}>사용자 본인(1)</Text>
        </View>
        <Text style={{ color: '#00BFFF', marginLeft: 10, marginBottom: 5 }}>계획대로 되고 있어</Text>
        <View style={{ paddingLeft: 10, paddingRight: 5, alignItems: 'baseline', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#D3D3D3', fontSize: 10 }}>방금 전</Text>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ borderWidth: 1, borderColor: '#00BFFF', borderRadius: 7, paddingHorizontal: 5 }}>5</Text>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/1200px-Bot%C3%B3n_Me_gusta.svg.png' }}
              style={{ marginLeft: 5, width: 25, height: 25 }} resizeMode='center'>
            </Image>
          </View>
        </View>
      </View>
    )


    console.log(guestbook[0]);
    this.setState({ guestbooks: guestbook });
  }


  render() {
    return (
      <View style={{ flex: 1 }}>



        <View style={{ paddingHorizontal: 15, justifyContent: 'space-between', backgroundColor: '#00AFFF', height: 60, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={this._goToMap} style={{ width: 30 }}>
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
            <TextInput multiline={true} style={styles.TextInput_style} placeholder='방명록 작성하기'></TextInput>
            <TouchableOpacity onPress={this._onRefresh} style={{alignSelf:'flex-end'}}>
              <View style={{ backgroundColor: '#00AFFF', width: 85, borderRadius: 5, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}> SEND </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{paddingLeft: 10, paddingRight: 10 }}>


            <View>
              {this.state.guestbooks}
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
    height: 85,
    borderWidth: 2,
    borderColor: '#00AFFF',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10
  }


});
