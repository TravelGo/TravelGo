
import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Icon, TouchableOpacity, Image, ScrollView, TouchableHighlight } from 'react-native';
import * as Progress from 'react-native-progress';
import Geocoder from 'react-native-geocoding';

export default class TabViewExample extends React.Component {

  constructor(props) {
    super(props);
    Geocoder.init("AIzaSyC-wh2GZ92W7jsNjtHD1JUDoMl1nNLRJgo");
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
  }

  async import_json_url(){

    var stops = [];

    await fetch('http://xn--9i5b27z1b.xn--3e0b707e/travelstop/37.610304/126.996917')
      .then(response => response.json())
      .then((responseJson) => {
        this.state.stops = responseJson;
      })
      .catch(error => alert(error));

      var addresses = {};
      var fulladdresses = [];
      var visible = {};

      for(i=0;i<this.state.stops.length;i++){
         await Geocoder.from(this.state.stops[i].location.latitude, this.state.stops[i].location.longitude)
            .then(json => {
              var addressComponent = json.results[0].formatted_address.split(' ');

              fulladdresses.push(
                {name: this.state.stops[i].name, doo: addressComponent[1], full: addressComponent[2]}
              )


              if(addresses[addressComponent[1]] == undefined){
                addresses[addressComponent[1]] = 0;
                visible[addressComponent[1]] = false;
              }
              addresses[addressComponent[1]] += 1;
            })
        .catch(error => console.warn(error));
      }

      this.setState({doo:addresses});
      console.log(this.state.doo);
      this.setState({fulladdresses: fulladdresses, visible:visible});
      console.log(visible);

  }


  componentDidMount(){
    this.import_json_url();
    this.setState({loading: false});
  }

  visiblebutton(key){
    var newvisible = {};
    newvisible = this.state.visible;
    newvisible[key] = !newvisible[key];
    this.setState({visible: newvisible});
  }


  showcomponent(key){
    var components = [];

    console.log(this.state.visible[key]);

    if(this.state.visible[key]){
      for(i=0;i<this.state.fulladdresses.length;i++){
        var tmp = this.state.fulladdresses[i];
        if(tmp.doo == key){
          components.push(
              <View style={{backgroundColor:'white', flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderColor:'rgba(200,200,200,100)', borderBottomWidth:1, margin:5}}>
                <View style={{width : this.state.width/2, marginLeft:30}}>
                  <Text style={{fontWeight:'bold', fontSize:15}}>{tmp.name}</Text>
                </View>
                <View style={{width: 80}}>
                  <Text style={{fontSize:10}}>{tmp.full}</Text>
                </View>
                <View style={{width:60}}>
                  <Image source={require("../images/logo.png")} style={{width:40, height: 40, resizeMode: 'contain'}}/>
                </View>
              </View>
          )
        }
      }
    }

    return  components;

  }

  manydoo(){
    var returnview = [];

    for(var key in this.state.doo){
      console.log(key);
      console.log(this.state.doo[key]);
      const inputkey =key;
      returnview.push(
        <View>
          <TouchableHighlight onPress={()=> this.visiblebutton(inputkey)}>
            <View style={{borderBottomWidth:2, height:50, borderColor:'rgba(150,150,150,100)', flexDirection:'row', alignItems:'center'}}>
              <Image source={this.state.visible[inputkey] ? (require("../images/toRight.png")) : (require("../images/toBottom.png"))} style={{width:40, height: 40, resizeMode: 'contain'}}/>
              <Text style={{fontSize:20, fontWeight:'bold'}}>{key + " (" + this.state.doo[key] + ")"}</Text>
            </View>
          </TouchableHighlight>
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
