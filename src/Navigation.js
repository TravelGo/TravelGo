import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';

const JEnum = require('./JEnum.js')

// Screen
import screenMain from './Main'
import screenLogin from './Login'
import screenRegister from './Register'
import screenChatting from './Chatting'
import screenMypage from './Mypage'
import screenSetting from './Setting'


// 왼쪽 모달
import ModalRecommanded from './modal/recommanded'; // 추천

// 오른쪽 모달
import ModalSetting from './modal/setting'; // 세팅
import ModalLicense from './modal/opensource'; // License

var fullWidth = Dimensions.get('window').width; //full width
var fullHeight = Dimensions.get('window').height; //full height

export default class App extends Component {
    screen = {
        'main' : screenMain,
    }

    modal = {
        'setting' : ModalSetting,
        'license' : ModalLicense,
    }

    state = {
        CurrentPage : this.screen['main'],
        currentLocation : "서울특별시 성북구 정릉3동",
        isOpen : false,
        menuItems : <View></View>,
        modalInner : ModalRecommanded
    }

    modalChange = (screen) => {
        this.setState({
            modalInner : this.modal[screen]
        });
    }
    openModal = (type) => {
        this.setState({
            isOpen : true,
            modalType : type,
            modalInner : ModalRecommanded
        })
        if(type === 'setting') {
            this.setState({
                modalInner : ModalSetting
            })
        }
    }
    closeModal = () => {
        this.setState({
            isOpen : false
        })
    }
    
    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.topNavigation}>
                    {/* <Image source={require('../images/')}/> */}
                    <Text style={styles.currentIcon}>◈</Text>
                    <Text>  </Text>
                    <Text style={styles.currentText}>현재 위치 : {this.state.currentLocation}</Text>
                </View>
                <this.state.CurrentPage/>
                <View style={styles.bottomNavigation}>
                    <TouchableOpacity  style={[styles.buttomButtonNav, {left:0}]} onPress={()=>{this.openModal('default')}}>
                        <Image source={require('../images/left.png')} style={styles.bottomButton}/>
                    </TouchableOpacity>
                    <Text style={styles.bottomText}>TRAVEL GO</Text>
                    <TouchableOpacity  style={[styles.buttomButtonNav, {right:0}]} onPress={()=>{this.openModal('setting')}}>
                        <Image source={require('../images/right.png')} style={styles.bottomButton}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.modalBg, {top:this.state.isOpen?0:fullHeight}]} onPress={()=>{this.closeModal()}}>
                    <View>
                        
                    </View>
                </TouchableOpacity>
                <View style={{alignItems:"center"}}>
                    <View style={[styles.modal, {top:(this.state.isOpen)?-1 * fullHeight * 0.90:fullHeight}]}>
                        <this.state.modalInner menu={this.leftModalItems} change={this.modalChange}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topNavigation : {
        flexDirection : 'row',
        justifyContent: 'center',
        padding : 10,
        backgroundColor : '#00a3ff',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden',
    },
    bottomNavigation : {
        flexDirection : 'row',
        justifyContent: 'center',
        padding : 15,
        backgroundColor : '#00a3ff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
        position : 'absolute',
        bottom : 0,
        width : fullWidth,
    },
    currentIcon : {
        color : "#ff0000"
    },
    currentText : {
        color : '#ffffff'
    },
    buttomButtonNav : {
        position:"absolute",
        margin : 10,
        bottom : 0
    },
    bottomText : {
        fontSize : 16,
        fontWeight : "bold",
        color : "#fff"
    },
    bottomButton : {
        width : 30,
        height : 30,
        resizeMode : 'stretch',
    },
    modalBg : {
        position : 'absolute',
        width : fullWidth,
        height : fullHeight,
        backgroundColor : "#00a3ffbb"
    },
    modal : {
        position : 'absolute',
        width : fullWidth * 0.9,
        height : fullHeight * 0.9,
        alignItems : 'center'
    }
});
