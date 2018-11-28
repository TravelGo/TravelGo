import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, ScrollView, View, Image, Dimensions, RefreshControl } from 'react-native';

fullHeight = Dimensions.get("window").height;
fullWidth = Dimensions.get("window").width;

export default class Chat extends Component {

    constructor(props) {
        super(props);
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

    state = {
        data: [],
        refreshing: false
    };

    TopBar = (
        <View>
            <View style={styles.UpperView}>
                <TouchableOpacity>
                </TouchableOpacity>
                <Text style={styles.UpperText}>용두리</Text>
                <TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View style={styles.UpperAdditionView}>
                <Text style={styles.SmallText}>접속자 수 </Text>
                <Text style={styles.SmallText}> 8</Text>
            </View>
        </View>
    )

    ChatBox = (
        <View style={[styles.ChatView, {height: fullHeight - 185}]}>
            <Image source={require("../images/logo.png")} style={styles.ImageBackground}></Image>
            <View style={styles.ScrollView}>
                <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)} />} >
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.ChattingText}>"용두리" 채팅방에 입장하셨습니다.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.ChattingText}>용두리 마스터(555):</Text>
                        <Text style={styles.ChattingText}> hi</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.ChattingText}>용두리 마스터(555):</Text>
                        <Text style={styles.ChattingText}> hi</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )

    TextInputBar = (
        <View style={styles.TextInputView}> 
            <TextInput style={styles.TextInput_style} placeholder='     보낼 내용을 입력해주세요'></TextInput>
            <TouchableOpacity>
                <Image source={require("../images/send.png")} style={{ width: 40, resizeMode: 'contain' }} />
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
        <View style={{flex: 1, backgroundColor: '#00afff'}}>
            {this.TopBar}
            <ScrollView>
                <View style={styles.MainView}>
                    {this.ChatBox}
                    {this.TextInputBar}
                </View>
            </ScrollView>
        </View>
        );
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
        backgroundColor: '#00afff',
        flex : 1,
        resizeMode: 'contain',
    },

    UpperText: {
        color: 'white',
        fontSize: 30,
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
        padding: 5,
        margin: 10,
        zIndex: 1
    },

    ImageBackground: {
        width: 330,
        resizeMode: 'contain',
        opacity: 0.3,
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

    ChattingText: {
        borderStyle: 'solid',
        fontSize: 20,
    },

});