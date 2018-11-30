import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, ScrollView, View, Image, Dimensions, Keyboard } from 'react-native';
import SocketIOClient from 'socket.io-client';
const JEnum = require('./JEnum.js')

fullHeight = Dimensions.get("window").height;
fullWidth = Dimensions.get("window").width;

export default class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message : "",
            username : "",
            stop : "",
            count : 0,
            chatting : []
        };
        this.socket = SocketIOClient('http://여행해.한국:3000');
        JEnum.axios.get(JEnum.userInfo + "/" + props.userID)
        .then(res => {
            this.setState({
                fullname : res.data.fullname,
                username : res.data.username,
            });
            if(props.travelStopId === "GLOBAL") {
                this.setState({
                    stop : "핵인싸 채팅방"
                });
                this.init();
            } else {
                JEnum.axios.get(JEnum.travelStop + "/" + this.props.travelStopId)
                .then(res => {
                    this.setState({
                        stop : res.data.title
                    });
                    this.init();
                })
            }
        })
    }

    init = () => {
        this.socket.emit("init", {
            user : this.state.username,
            username : this.state.fullname,
            stop : this.props.travelStopId
        });
        this.socket.on("join", (data) => {
            this.state.chatting.push({
                type : "join",
                data : data
            })
            this.setState({
                chatting : this.state.chatting,
                count : this.state.count + 1
            })
        })
        this.socket.on("message", (data) => {
            this.state.chatting.push({
                type : "message",
                data : data
            })
            this.setState({
                chatting : this.state.chatting
            })
        })
    }

    sendMessage = () => {
        this.socket.emit("message", {
            user : this.state.username,
            message : this.state.message,
            stop : this.props.travelStopId
        });
        this.setState({
            message : ""
        })
    }


    render() {
        chatting = []
        logs = this.state.chatting
        for(let i=0;i<logs.length;i++) {
            if(logs[i].type === "join") {
                chatting.push(
                    (
                        <View style={{ alignItems: 'center', marginBottom : 10 }}>
                            <Text style={styles.ChattingText}>{logs[i].data}</Text>
                        </View>
                    )
                )
            } else {
                chatting.push(
                    (
                        <View style={{marginBottom:10}}>
                            <View>
                                <Text style={styles.sender}>{logs[i].data.sender}</Text>
                            </View>
                            <View style={{flexDirection:'row',marginTop:5}}>
                                <Text style={[styles.ChattingText, {backgroundColor:'#f0C400', padding:10, borderRadius:10,  }]}>{logs[i].data.message}</Text>
                            </View>
                        </View>
                    )
                )    
            }
        }
        return (
            <View style={{flex: 1, backgroundColor: '#00afff'}}>

                {/* Header */}
                <View>
                    <View style={styles.UpperView}>
                        <TouchableOpacity onPress={() => { this.props.change('travelStop'); }} style={{ width: 30 }}>
                            <Image source={require("../images/goBackButton.png")} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                        <Text style={styles.UpperText}>{this.state.stop}</Text>
                        <View style={{ width: 30 }}>
                        </View>
                    </View>
                    <View style={styles.UpperAdditionView}>
                        <Text style={styles.SmallText}>접속자 수 </Text>
                        <Text style={styles.SmallText}> {this.state.count}</Text>
                    </View>
                </View>

                {/* Section */}
                <View style={[styles.MainView, {flex:(fullHeight - 95)/fullHeight}]}>
                    <View style={[styles.ChatView, {flex:1}]}>
                        <Image source={require("../images/logo.png")} style={styles.ImageBackground}></Image>
                        <View style={styles.ScrollView}>
                            <ScrollView
                                style={{flex:1,padding:20}}
                                ref={ref => this.scrollView = ref}
                                onContentSizeChange={(contentWidth, contentHeight)=>{        
                                    this.scrollView.scrollToEnd({animated: true});
                                }}
                            >
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={[styles.ChattingText, {colot:'red'}]}>"{this.state.stop}" 채팅방에 입장하셨습니다.</Text>
                                </View>
                                {chatting}
                                <View style={{height:50}}></View>
                            </ScrollView>
                        </View>
                    </View>
                </View>

                {/* Footer */}
                <View style={styles.bottomNavigation}>
                    <View style={styles.TextInputView}>
                        <TextInput
                            onSubmitEditing={Keyboard.dismiss}
                            value={this.state.message}
                            style={styles.TextInput_style}
                            placeholder='보낼 내용을 입력해주세요'
                            onChangeText={(value) => { this.setState({ message: value }) }}>
                        </TextInput>
                        <TouchableOpacity onPress={this.sendMessage}>
                            <Image source={require("../images/send.png")} style={{ width: 40, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    TextInput_style: {
        borderColor: '#00BFFF',
        width: 300,
        height: 60,
        marginLeft: 5,
        paddingLeft: 10,
        backgroundColor : '#eee'
    },

    bottomNavigation : {
        flexDirection : 'row',
        justifyContent: 'center',
        overflow: 'hidden',
        position : 'absolute',
        bottom : 0,
        width : fullWidth,
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
        backgroundColor: '#ffffff',
    },

    UpperText: {
        color: 'white',
        fontSize: 25, 
        fontWeight: 'bold',
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
        flex: 1,
        zIndex: 1
    },

    ImageBackground: {
        width: 330,
        resizeMode: 'contain',
        opacity: 0.1,
        zIndex: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left:(fullWidth - 330)/2
    },

    ChatView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'white',
        alignItems: 'stretch',
    },

    TextInputView: {
        flex: 1,
        alignItems: 'flex-end',
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

    owner: {
        fontWeight : 'bold',
        fontSize: 13,
    },
    ChattingText: {
        borderStyle: 'solid',
        fontSize: 15,
    },

});