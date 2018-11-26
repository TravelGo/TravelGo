import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView, } from 'react-native';

const JEnum = require('../JEnum.js')

export default class App extends Component {

    constructor(props) {
        super(props);
        const { width, height } = Dimensions.get("window")
        this.state = {
            window: {
                width: width * 0.9,
                height: height * 0.9,
            },
            stops : []
        }
        JEnum.axios.get(JEnum.recommanded)
        .then(res => {
            this.setState({
                stops : res.data
            })
        })
    }

    render() {

        var Reco = [];

        this.state.stops.forEach(row => {
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

        return (
            <View style={styles.container}>
                {TopBar}
                {TstopList}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
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
