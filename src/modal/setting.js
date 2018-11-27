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
                recent : res.data[0]
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
                        <TouchableOpacity onPress={() => {this.props.change("mypage");}}>
                            <View style={{ borderRadius: 100, borderWidth: 15, borderColor: 'rgba(255,255,255, 0.5)', width: this.state.window.width / 2 - 20, height: this.state.window.width / 2 - 20, justifyContent: 'center' }}>
                                <Image source={require('../../images/ddobuck.png')} style={{ flex: 1, alignSelf: 'stretch', borderColor: 'white', borderWidth: 5, borderRadius: 100, width: null }}></Image>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

                    <View style={styles.settingview1}>
                        <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold',}}>여행자님이 방문한 Travel Stop</Text>
                    </View>

                <ScrollView>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {visited}
                    </View>
                </ScrollView>
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
        backgroundColor: '#F2F2F2',
    },
    view: {
        flex: 1
    },
    settingview1: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#00afff'
    },
    settingview3: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
