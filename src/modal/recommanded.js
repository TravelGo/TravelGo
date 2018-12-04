import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView, } from 'react-native';

const JEnum = require('../JEnum.js')
const fullWidth = Dimensions.get("window").width;

export default class App extends Component {

    constructor(props) {
        super(props);
        const { width, height } = Dimensions.get("window")

        this.state = {
            window: {
                width: width * 0.9,
                height: height * 0.9,
            },
        }

    }

    render() {

        var Reco = [];
        
        TopBar = (
            <View style={styles.top}>
                <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: 'bold' }}>추천 트래블 스탑</Text>
            </View>
        )

        TstopList = (
            <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white' }}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        {Reco}
                    </View>
                </ScrollView>
            </View>
        )

        if(this.props.stops.length) {
            this.props.stops.forEach(row => {
                Reco.push(
                    <View style={{ width: this.state.window.width / 2 - 10, height: this.state.window.width / 2 - 10, margin: 3, }}>
                        <Image
                            style={{ flex: 3, width: this.state.window.width / 2 - 10, height: 100, borderWidth: 1.5, borderColor: 'white' }}
                            source={{ uri: row.image }}
                        />
                        <View style={{ flex: 1, backgroundColor:'#eee', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 10 }}>
                                {row.name}
                            </Text>
                        </View>
                    </View>
                )
            });            


            return (
                <View style={styles.container}>
                    {TopBar}
                    {TstopList}
                </View>
            )

        } else {
            return (
                <View style={styles.container}>
                    {TopBar}
                    <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                        <Image
                            source={require("../../images/logo.png")}
                            style={{ width: 200, height: 200, resizeMode: 'contain', justifyContent: 'center', alignItems: 'center'  }}
                        />

                        <Text style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center',fontSize: 20 }}>
                            주변 8km에 트래블 스탑이 없습니다.{"\n"}
                            계속해서 주변을 탐색해보세요!
                        </Text>
                    </View>
                </View>
            )
        }       
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: fullWidth
    },
    top: {
        height: 50,
        backgroundColor: '#545454',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        // marginBottom: 5,    
    }
});
