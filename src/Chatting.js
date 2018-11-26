import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, ScrollView, View, Image, Dimensions, RefreshControl } from 'react-native';
// TextInput, ImageBackground, Button,

export default class Chat extends Component {

    constructor(props) {
        super(props);
        const { width, height } = Dimensions.get("window")
        this.state = {
            width,
            height,
            data: [],
            refreshing: false    
        }
    }

    fetchData = async () => {
        const response = await fetch('');
        const products = await response.json();
        this.setState({ data: products });
    }

    _onRefresh() {
        this.setState({ refreshing: true });
        this.fetchData().then(() => {
            this.setState({ refreshing: false })
        });
    }

    render() {
        return (
            <View style={styles.MainView}>

                <TopBar />

                <ChatBox />

                <TextInputBar />

            </View>
        );
    }
}

class TopBar extends Component {
    render() {
        return (
            <View>
                <View style={styles.UpperView}>
                    <TouchableOpacity>
                        <Image source={require("../images/Back_Button.png")} style={styles.UpperButton} />
                    </TouchableOpacity>
                    <Text style={styles.UpperText}>용두리</Text>
                    <TouchableOpacity>
                        <Image source={require("../images/right.png")} style={styles.UpperButton} />
                    </TouchableOpacity>
                </View>
                <View style={styles.UpperAdditionView}>
                    <Text style={styles.SmallText}>접속자 수 </Text>
                    <Image source={require("../images/person.png")} style={{ width: 15, resizeMode: 'contain' }}></Image>
                    <Text style={styles.SmallText}> 8</Text>
                </View>
            </View>
        )
    }
}

class ChatBox extends Component {
    render() {
        return (
            <View style={styles.ChatView}>
                <Image source={require("../images/logo.png")} style={styles.ImageBackground}></Image>
                <View style={styles.ScrollView}>
                    <ScrollView>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ borderStyle: 'solid' }}>"용두리" 채팅방에 입장하셨습니다.</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ borderStyle: 'solid' }}>용두리 마스터(555):</Text>
                            <Text> hi</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ borderStyle: 'solid' }}>용두리 마스터(555):</Text>
                            <Text> hi</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

class TextInputBar extends Component {
    render() {
        return (
            <View style={styles.TextInputView}>
                <TextInput style={styles.TextInput_style} placeholder='     보낼 내용을 입력해주세요'></TextInput>
                <TouchableOpacity>
                    <Image source={require("../images/send.png")} style={{ width: 40, resizeMode: 'contain' }} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    TextInput_style: {
        borderWidth: 2,
        borderColor: '#00BFFF',
        width: 330,
        height: 60,
        marginLeft: 5,
        paddingLeft: 10,
        borderRadius: 30,
    },

    button: {
        width: 80,
        height: 80,
        textAlign: 'center',
        borderRadius: 5,
    },

    ScrollItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        margin: 2,
    },

    UpperView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 10
    },

    MainView: {
        backgroundColor: '#787878',
        height: 1200,
        resizeMode: 'contain',
    },

    UpperText: {
        color: 'white',
        fontSize: 30,
    },

    UpperButton: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },

    UpperAdditionView: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 30,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    SmallText: {
        color: 'white', fontSize: 14,
    },

    ScrollView: {
        width: 400,
        height: 490,
        paddingTop: 5,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#b4b4b4',
        zIndex: 1
    },

    ImageBackground: {
        width: 330,
        resizeMode: 'contain',
        opacity: 0.3,
        zIndex: 0,
        position: 'absolute',
    },

    ChatView: {
        height: 500,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        alignItems: 'center',
    },

    TextInputView: {
        height: 80,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 2,
        borderColor: '#b4b4b4',
        paddingLeft: 5,
        paddingRight: 15,
        backgroundColor: 'white',
    },

});