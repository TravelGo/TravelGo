
import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Icon, TouchableOpacity, Image, ScrollView, TouchableHighlight } from 'react-native';
import * as Progress from 'react-native-progress';
const JEnum = require('./JEnum.js');

export default class TabViewExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width:Dimensions.get("window").width,
      height:Dimensions.get("window").height,
      loading: true,
      doo:{
      },
      stops:[],
      visible:{},
      fulladdresses:[],
    };

    JEnum.axios.get(JEnum.visited + this.props.userID)
    .then(res => {
        this.setState({
            recentTS : res.data,
            recent : res.data.length === 0 ? {
                "image" : "https://upload.wikimedia.org/wikipedia/commons/6/6d/Baitou_Mountain_Tianchi.jpg"
             } : res.data[0]

        })
    });
  }

  async import_json_url(){

    await fetch('http://35.231.168.105/travelstop/all')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({stops:responseJson});
      })
      .catch(error => alert(error));

      var addresses = {
        서울특별시 :0,
        인천광역시 :0,
        전라남도 :0,
        충청남도 :0,
        제주특별자치도 :0,
        전라북도:0,

      };

      var doo = ["서울특별시","인천광역시","전라남도","충청남도","제주특별자치도","전라북도","충청북도"]

      var fulladdresses = [];
      var visible = {};


      this.state.stops.map((contact, i) => {
        var addressComponent = contact.address.split(' ');
        for(j=0;j<=doo.length;j++){
          if(contact.address.indexOf(doo[j]) == -1){
            visible[doo[j]] = false;
          }else{
            addresses[doo[j]] += 1;
            fulladdresses.push(
              {name: contact.name, doo: doo[j], full: addressComponent[2]}
            )
            break;
          }
          if(j==doo.length){
            console.log(contact.address);
          }
        }

      });

      this.setState({doo:addresses});
      this.setState({fulladdresses: fulladdresses, visible:visible});

  }


  componentDidMount(){
    this.import_json_url();
    this.setState({loading: false});
    console.log(this.props);
  }

  visiblebutton(key){
    var newvisible = {};
    newvisible = this.state.visible;
    newvisible[key] = !newvisible[key];
    this.setState({visible: newvisible});
  }

  showvisited(title){
    console.log(this.state.recentTS)
    output = "아직 방문한적이 없는 트레블스탑이에요!";
    for(i=0;i<this.state.recentTS.length;i++){
      if(this.state.recentTS[i].title == title){
        output = "이미 방문하셨던 트레블스탑이네요!";
        break;
      }
    }

    alert(output);

  }


  showcomponent(key){
    var components = [];


    if(this.state.visible[key]){
      for(i=0;i<this.state.fulladdresses.length;i++){
        var tmp = this.state.fulladdresses[i];
        if(tmp.doo == key){
          const name= tmp.name;
          components.push(
            <TouchableOpacity onPress={()=> this.showvisited(name)}>
              <View style={{backgroundColor:'white', height:50, flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderColor:'rgba(200,200,200,100)', borderBottomWidth:1, }}>
                <View style={{width : this.state.width/2, marginLeft:30}}>
                  <Text style={{fontWeight:'bold', fontSize:15}}>{tmp.name}</Text>
                </View>
                <View style={{width: 80}}>
                  <Text style={{fontSize:10}}>{tmp.full}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        }
      }
    }

    return  components;

  }

  manydoo(){
    var returnview = [];

    for(var key in this.state.doo){
      const inputkey =key;
      returnview.push(
        <View>
          <TouchableOpacity onPress={()=> this.visiblebutton(inputkey)}>
            <View style={{borderBottomWidth:2, height:50, borderColor:'rgba(150,150,150,100)', flexDirection:'row', alignItems:'center'}}>
              <Image source={this.state.visible[inputkey] ? (require("../images/toRight.png")) : (require("../images/toBottom.png"))} style={{width:40, height: 40, resizeMode: 'contain'}}/>
              <Text style={{fontSize:20, fontWeight:'bold'}}>{key + " (" + this.state.doo[key] + ")"}</Text>
            </View>
          </TouchableOpacity>
          {this.showcomponent(key)}

        </View>
      )
    }

    return returnview;
  }

  render() {

    return (

      <View style={{flex:1,flexDiretion:'column'}}>
        {this.state.loading ? <Text>loading</Text> :
          <ScrollView>
            {this.manydoo()}
          </ScrollView>
        }
      </View>

    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
