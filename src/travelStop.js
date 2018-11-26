import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, Image, TouchableOpacity, ScrollView} from 'react-native';
import MapView from 'react-native-maps';
import geolib from 'geolib';
import {Dimensions} from "react-native";
import StopOnImg from '../images/travelstop(on).png';
import StopOffImg from '../images/travelstop(off).png';
import { Button } from 'react-native';
const JEnum = require('./JEnum.js');


export default class App extends Component {

    constructor(props) {
        super(props);
        const { width, height } = Dimensions.get("window")
        this.state = {
            _id : props.travelStopId,
            title : "두리두리 용두리",
            image : 'http://www.doopedia.co.kr/_upload/image4/1711/03/171103021618274/171103021618274_thumb_400.jpg',
            description : "",
            comment : [
                "A",
                "B",
                "C"
            ],
            window: {
                width: width,
                height: height
            },
            user: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 1,
                longitudeDelta: 1,
            },
            stop: {
                latitude: 0,
                longitude: 0
            },
            stops: []
        }
        JEnum.axios.get(JEnum.travelStop + this.state._id)
        .then((res) => {
            this.setState({
                stops: [{
                    location : {
                        latitude: res.data.lat,
                        longitude: res.data.lng      
                    }
                },],
                stop: {
                    latitude : res.data.lat,
                    longitude : res.data.lng
                }
            })
            this.setState(res.data);
        })
    }


    componentDidMount() {
        setInterval(() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({
                        user: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }
                    });
                },
                (error) => alert(JSON.stringify(error)),
                { enableHighAccuracy: true, timeout: 2000 }
            )
        }, 2000);
    }

    render() {

        T_TITLE = (
            <View style={styles.T_Title}>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                <TouchableOpacity onPress={() => { this.props.change('Main'); }}>
                    <Image
                        source={require('../images/goBackButton.png')}
                        style={{width: 25, height: 25,}}
                    />
                </TouchableOpacity>
            </View>
            
            <View style={{flex: 6, justifyContent: 'center', alignItems: 'center',}}>
                <Text style={styles.T_Title_Text}>
                { this.state.title }
                </Text>
            </View>

            <View style={{flex: 1}}></View>
            </View>
        )

        T_View = (
            <View style={styles.T_View}>
                <TouchableOpacity onPress={() => {
                    JEnum.axios.get(JEnum.travelStopVisit + this.props.userID + "/" + this.props.travelStopId)
                    .then(response => {
                        alert(response.data.message);
                    })
                }}>
                    <Image
                        style={{flex: 1, width: 260, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginLeft: 50, marginRight: 50, marginTop: 10, marginBottom: 10,}}
                        source={{uri: (this.state.image ? this.state.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1024px-No_image_3x4.svg.png")}} //서버에서 받아올 것
                    />
                </TouchableOpacity>
            </View>
        )

        T_Info = (
            <View style={styles.T_Info}>
                <Text style={styles.T_Info_Text}>{this.state.description ? this.state.description : "Description이 작성되지 않은 TravelStop 입니다."}</Text>
            </View>
        )

        T_Mention = (
            <View style={styles.T_Mention}>
                <View style={styles.Mention_Group}>
                    <Text style={styles.T_Mention_Text}>
                        {this.state.comment[0]}
                    </Text>
                </View>
                <View style={styles.Mention_Group}>
                    <Text style={styles.T_Mention_Text}>
                        {this.state.comment[1]}
                    </Text>
                </View>

                <View style={styles.Mention_Group}>
                    <Text style={styles.T_Mention_Text}>
                        {this.state.comment[2]}
                    </Text>
                </View>
            </View>
        )

        T_ButtonGroup = (
            <View style={styles.T_ButtonGroup}>

            <View style={{flex: 1}}></View>

            <TouchableOpacity onPress={() => this.props.change('board')}>
            <View style={styles.T_Button}>
                <Text style={{fontSize: 13, color: "#FFFFFF", fontWeight: 'bold'}}>
                    방명록
                </Text>
            </View>
            </TouchableOpacity>

            <View style={{flex: 1}}></View>

            <TouchableOpacity onPress={() => this.props.change('chatting')}>
            <View style={styles.T_Button}>
                <Text style={{fontSize: 13, color: "#FFFFFF", fontWeight: 'bold'}}>
                    채팅방
                </Text>
            </View>
            </TouchableOpacity>

            <View style={{flex: 1}}></View>

            </View>
        )

        T_Map = (
            <View style={styles.T_Map}>
                <MapView style={styles.mapview}
                    showsUserLocation={false}
                    initialRegion={{
                        latitude: this.state.stop.latitude, //서버에서 받아올 것
                        longitude: this.state.stop.longitude, //서버에서 받아올 것
                        latitudeDelta: 0.002,
                        longitudeDelta: 0.002,
                    }}
                    region={{
                        latitude: this.state.stop.latitude, //서버에서 받아올 것
                        longitude: this.state.stop.longitude, //서버에서 받아올 것
                        latitudeDelta: 0.002,
                        longitudeDelta: 0.002,
                    }}
                    rotateEnabled={false}
                    scrollEnabled={false}
                    pitchEnabled={false}
                    zoomEnabled={false}
                >
                    {this.state.stops.map((contact, i) =>
                        <MapView.Marker coordinate={contact.location} key={i} image={StopOnImg} />
                    )}
                </MapView>
            </View>
        )

        return (
            <View style={styles.container}>

                    {T_TITLE}
                    {T_View}

                <View style={{flex: 1, width: this.state.window.width, height: this.state.window.height}}>
                    <ScrollView style={{flex: 1, alignSelf: 'stretch', width: this.state.window.width, height: this.state.window.height}}>

                        {T_Info}

                        {T_Mention}

                        {T_Map}
                        
                        {T_ButtonGroup}

                    </ScrollView>
                </View>
            </View>
        );
    }
}


// class T_Map extends Component{

//   componentDidMount(){
//     setInterval(() => {
//       navigator.geolocation.getCurrentPosition(
//           (position) =>{
//             this.setState({
//               user: {
//                 latitude: position.coords.latitude,
//                 longitude: position.coords.longitude,
//                 latitudeDelta: 0.005,
//                 longitudeDelta: 0.005,
//               }
//             });
//           },
//         (error) => alert(JSON.stringify(error)),
//         {enableHighAccuracy: true, timeout: 2000}
//       )
//     }, 2000);
//   }

// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    T_Title: {
        height:40,
        backgroundColor: '#545454',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
    },

    T_Title_Text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    T_View: {
        height: 170,
        backgroundColor: '#00AFFF',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },

    T_Info: {
        flex: 1.5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'stretch',
    },

    T_Info_Text: {
        fontSize: 15,
        color: '#000000',
        padding: 5,

    },

    T_Mention: {
        flex: 2,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },

    T_Mention_Text: {
        fontSize: 10,
        color: '#00AFFF',
    },

    T_Map: {
        // flex: 3,
        height: 170,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },

    T_ButtonGroup: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },

    T_Button: {
        flex: 1,
        backgroundColor: '#00AFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginTop: 10,
        marginBottom: 10,
        width: 100,
    },

    T_Button_Text: {
        fontSize: 10,
        color: '#FFFFFF',
    },

    Mention_Group: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 7,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#00AFFF',
        marginBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'stretch',
        marginLeft: 50,
        marginRight: 50,
    },

    view:{
        flex: 1,
        alignItems: 'center',
      },
    
    mapview:{
      flex: 5,
      alignItems: 'center',
      alignSelf: 'stretch',
      borderRadius: 7,
      marginLeft: 50,
      marginRight: 50,
    },
    
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    
    tile:{
      height:30,
      justifyContent:'center',
      marginHorizontal:15,
      fontSize:40,
      borderBottomColor: '#000000',
      borderBottomWidth: 1
    },
    
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }
});