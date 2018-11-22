import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Switch, TouchableOpacity, Image, Dimensions, ScrollView, ImageBackground } from 'react-native';

export default class App extends Component {

    constructor(props) {
        super(props);
        const { width, height } = Dimensions.get("window")
        this.state = {
            switch1: false,
            switch2: false,
            switch3: false,
            window: {
                width: width,
                height: height
            },
            userInfo: {
            }

        }
    }

    render() {
        var visited = [];
        for (i = 1; i < 5; i++) {
            visited.push(
                <View style={{ width: this.state.window.width / 2, height: 100 }}>
                    <Image source={require('../../images/tropical.jpg')} style={{ width: null, height: 100, borderWidth: 1.5, borderColor: 'white' }} />
                </View>
            )
            visited.push(
                <View style={{ width: this.state.window.width / 2, height: 100 }}>
                    <Image source={require('../../images/forest.jpg')} style={{ width: null, height: 100, borderWidth: 1.5, borderColor: 'white' }} />
                </View>
            )
            visited.push(
                <View style={{ width: this.state.window.width / 2, height: 100 }}>
                    <Image source={require('../../images/island.jpg')} style={{ width: null, height: 100, borderWidth: 1.5, borderColor: 'white' }} />
                </View>
            )
        }



        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: this.state.window.width, height: this.state.window.width / 2 }}>
                    <ImageBackground source={require('../../images/kookmin.jpeg')} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ borderRadius: 100, borderWidth: 15, borderColor: 'rgba(255,255,255, 0.5)', width: this.state.window.width / 2 - 20, height: this.state.window.width / 2 - 20, justifyContent: 'center' }}>
                            <Image source={require('../../images/ddobuck.png')} style={{ flex: 1, alignSelf: 'stretch', borderColor: 'white', borderWidth: 5, borderRadius: 100, width: null }}></Image>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.settingview1}>
                    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'green', borderWidth: 3, borderColor: 'white' }}>
                        <Text style={{ margin: 5, fontSize: 20 }}>ID</Text>
                        <Text>SeongHoon Choi</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.settingview2}>
                        <View style={[styles.settingview2_1, { borderBottomWidth: 1, borderBottomColor: 'rgba(230,230,230, 1)' }]}>
                            <View style={{ flex: 5, justifyContent: 'center' }}>
                                <Text style={{ marginLeft: 20, fontSize: 20 }}>BGM ON / OFF</Text>
                            </View>
                            <View style={{ flex: 2, alignItems: 'center' }}>
                                <Switch style={{ margin: 5, transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }} onValueChange={(value) => this.setState({ switch1: value })} value={this.state.switch1} />
                            </View>
                        </View>
                        <View style={[styles.settingview2_1, { borderBottomWidth: 1, borderBottomColor: 'rgba(230,230,230, 1)' }]}>
                            <View style={{ flex: 5, justifyContent: 'center' }}>
                                <Text style={{ marginLeft: 20, fontSize: 20 }}>setting 1</Text>
                            </View>
                            <View style={{ flex: 2, alignItems: 'center' }}>
                                <Switch style={{ margin: 5, transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }} onValueChange={(value) => this.setState({ switch2: value })} value={this.state.switch2} />
                            </View>
                        </View>
                        <View style={[styles.settingview2_1, { borderBottomWidth: 1, borderBottomColor: 'rgba(230,230,230, 1)' }]}>
                            <View style={{ flex: 5, justifyContent: 'center' }}>
                                <Text style={{ marginLeft: 20, fontSize: 20 }}>setting 1</Text>
                            </View>
                            <View style={{ flex: 2, alignItems: 'center' }}>
                                <Switch style={{ margin: 5, transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }} onValueChange={(value) => this.setState({ switch3: value })} value={this.state.switch3} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {visited}
                    </View>
                </ScrollView>
                <View style={styles.settingview3}>
                    <TouchableOpacity onPress={() => { this.props.change('license'); }}>
                        <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 15 }}>Open Source</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#4dc3ff',
    },
    view: {
        flex: 1
    },
    settingview1: {
        justifyContent: 'center',
        alignItems: 'stretch',
        borderBottomWidth: 3,
        borderBottomColor: 'white',
        borderTopWidth: 3,
        borderTopColor: 'white',
        flexDirection: 'row',
    },
    settingview2: {
        justifyContent: 'center',
        alignItems: 'stretch',
        borderBottomWidth: 3,
        borderBottomColor: 'white',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    settingview2_1: {
        flexDirection: 'row',
        margin: 5,
    },
    settingview2_2: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    settingview3: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
