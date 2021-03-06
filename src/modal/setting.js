import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Switch, TouchableOpacity, Image, Dimensions, ScrollView, ImageBackground } from 'react-native';
const JEnum = require('../JEnum.js');

export default class App extends Component {

    constructor(props) {
        super(props);
        const { width, height } = Dimensions.get("window")
        this.state = {
            window: {
                width: width,
                height: height
            },
            userInfo: {

            },
            recentTS : [],
            recent : {}
        }

        JEnum.axios.get(JEnum.visited + this.props.userID)
        .then(res => {
            this.setState({
                recentTS : res.data,
                recent : res.data.length === 0 ? {
                    "image" : "https://upload.wikimedia.org/wikipedia/commons/6/6d/Baitou_Mountain_Tianchi.jpg"
                 } : res.data[0]

            })
        })
    }

    render() {
        var visited = [];
        this.state.recentTS.forEach(r => {
            visited.push(
                <View style={{ width: this.state.window.width / 2, height: 100 }}>
                    <Image source={{uri:r.image}} style={{ width: null, height: 100, borderWidth: 1.5, borderColor: 'white' }} />
                </View>
            )
        })



        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: this.state.window.width, height: this.state.window.width / 2 }}>
                    <ImageBackground source={{uri:this.state.recent.image}} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => {this.props.move("mypage");}}>

                            <View style={{ borderRadius: 100, borderWidth: 15, borderColor: 'rgba(255,255,255, 0.5)', width: this.state.window.width / 2 - 20, height: this.state.window.width / 2 - 20, justifyContent: 'center', padding: 10, backgroundColor:'#fff' }}>
                                <Image source={require('../../images/square.png')} style={{ flex: 1, resizeMode: 'stretch', width: null }}></Image>
                            </View>

                        </TouchableOpacity>
                    </ImageBackground>
                </View>

                <View style={styles.settingview1}>
                    <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold',}}>Visited Travel Stops</Text>
                </View>

                {(this.state.recentTS.length==0) ? (
                    <View style={styles.novisited}> 
                        <Text style={{fontSize:20}}>방문하신 트래블 스탑이 없습니다.</Text>
                        <Text style={{fontSize:10}}>어서 여행을 떠나세요!</Text>
                    </View>
                    ) : (
                    <ScrollView>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {visited}
                        </View>
                    </ScrollView>
                )}

                <TouchableOpacity onPress={() => { this.props.change('license'); }}>
                    <View style={styles.settingview3}>
                        <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 15 }}>Open Source</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    view: {
        flex: 1
    },
    settingview1: {
        padding : 10,
        backgroundColor: '#00afff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    novisited : {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        paddingTop : 50,
        paddingBottom : 50
    },
    settingview3: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
