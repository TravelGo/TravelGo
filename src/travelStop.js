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
            title : "",
            image : "",
            description : "",
            comment : [],
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
            stops: [],
            guestBookCounter : 0
        }
        JEnum.axios.get(JEnum.travelStop + this.state._id)
        .then((res) => {
          console.log(res.data.comments);
            comments = [];

            if (res.data.comments.length == 0) {
                comments.push("기록된 방명록이 없습니다. 처음으로 방명록을 남겨보세요!");
            }

            else {
                for(let i=0;i<res.data.comments.length;i++) {
                    if (res.data.comments[i].body.length > 38) {
                        comments.push(res.data.comments[i].body.replace(/\n/g, " ").slice(0, 38) + "...");
                    }
                    else {
                        comments.push(res.data.comments[i].body.replace(/\n/g, " "));
                    }

                }
            }

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
                },
                comment : comments
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
            <View style={[styles.T_Info, ]}>
                <View style={[styles.info_Box, {width: this.state.window.width - 60}]}>
                    <Text style={styles.T_Info_Text}>{this.state.description ? this.state.description : "Description이 작성되지 않은 TravelStop 입니다."}</Text>
                </View>
            </View>
        )

        const mentions = []


            this.state.comment.forEach(comment => {
                mentions.push((
                    <View style={styles.Mention_Group}>
                        <Text style={styles.T_Mention_Text}>
                            {comment}
                        </Text>
                    </View>
                ))
            })



        T_Mention = (
            <View style={styles.T_Mention}>
                {mentions}
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
                        (<MapView.Marker coordinate={contact.location} key={i}>
                            <Image source={StopOnImg} style={{ width: 40, height: 40 }}/>
                        </MapView.Marker>)
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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
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
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'stretch',
        padding: 30,
    },

    info_Box: {
        backgroundColor: '#FAFAFA',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#A4A4A4',
    },

    T_Info_Text: {
        fontSize: 12,
        color: '#000000',
        lineHeight: 17,
    },

    T_Mention: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingBottom: 15,
    },

    T_Mention_Text: {
        fontSize: 10,
        color: '#00AFFF',
    },

    T_Map: {
        height: 170,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },

    T_ButtonGroup: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },

    T_Button: {
        height: 36,
        backgroundColor: '#00AFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginTop: 10,
        marginBottom: 10,
        width: 100,
        marginBottom: 10,
    },

    T_Button_Text: {
        fontSize: 10,
        color: '#FFFFFF',
    },

    Mention_Group: {
        height: 25,
        justifyContent: 'center',
        borderRadius: 7,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#00AFFF',
        marginBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'stretch',
        marginLeft: 30,
        marginRight: 30,
    },

    mapview:{
      height: 160,
      alignItems: 'center',
      alignSelf: 'stretch',
      borderRadius: 7,
      marginLeft: 50,
      marginRight: 50,
    },
});
