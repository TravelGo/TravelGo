import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

const JEnum = require('./JEnum.js')

// Screen
import screenMain from './Main'
import screenLogin from './Login'
import screenRegister from './Register'
import Chatting from './Chatting'
import Mypage from './Mypage'
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
        'mypage' : Mypage,
        'chatting' : Chatting,
    }

    state = {
        CurrentPage : this.screen['main'],
        currentLocation : "서울특별시 성북구 정릉3동",
        isOpen : false,
        menuItems : <View></View>,
        modalInner : ModalRecommanded,
        travelStop : "",
        money : 0
    }

    changeCurrentLocation = (data) => {
        this.setState({
            currentLocation : data
        })
    }

    modalChange = (screen) => {
        this.setState({
            modalInner : this.modal[screen]
        });
    }
    
    travelStop = (id) => {
        this.props.travelStop(id);
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
        } else if(type === 'travelStop') {
            this.setState({
                modalInner : ModalTravelStop
            })
        } else if(type === 'mypage') {
            this.setState({
                modalInner : Mypage
            })
        }
    }
    closeModal = () => {
        this.setState({
            isOpen : false
        })
    }

    _id = (a) => {
        this.setState({
            _id : a
        })
        this.props._id(a);
    }

    globalChat() {
        if(this.state.money == 3) {
            this.props.travelStop("GLOBAL")
            this.props.change("chatting")
        }
        this.setState({
            money : this.state.money + 1
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
                {/* Current Page */}
                <this.state.CurrentPage
                    _id={this._id}
                    userID={this.state.userID}
                    change={this.props.change}
                    modal={this.modalChange}
                    travelStop={this.travelStop}
                    travelStopId={this.state.travelStop}
                    changeCurrentLocation={this.changeCurrentLocation}
                />
                <View style={styles.bottomNavigation}>
                    <TouchableOpacity  style={[styles.buttomButtonNav, {left:0}]} onPress={()=>{this.openModal('default')}}>
                        <Image source={require('../images/left.png')} style={styles.bottomButton}/>
                    </TouchableOpacity>
                    <TouchableWithoutFeedback onPress={() => {this.globalChat()}}>
                        <Text style={styles.bottomText}>TRAVEL GO</Text>
                    </TouchableWithoutFeedback>
                    <TouchableOpacity  style={[styles.buttomButtonNav, {right:0}]} onPress={()=>{this.openModal('setting')}}>
                        <Image source={require('../images/right.png')} style={styles.bottomButton}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.modalBg, {top:this.state.isOpen?0:fullHeight}]} onPress={()=>{this.closeModal()}}>
                    <View></View>
                </TouchableOpacity>
                <View style={{alignItems:"center"}}>
                    <View style={[styles.modal, {top:(this.state.isOpen)?-1 * fullHeight + 30:fullHeight}]}>
                        <this.state.modalInner move={this.props.change} menu={this.leftModalItems} userID={this.props.userID} change={this.modalChange}/>
                    </View>
                </View>
                <TouchableOpacity style={{position:"absolute",left:10, top:this.state.isOpen?15:fullHeight}} onPress={()=>{this.closeModal()}}>
                    <Image
                        source={require('../images/goBackButton.png')}
                        style={{width: 30, height: 30}}
                    />
                </TouchableOpacity>
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
        width : fullWidth,
        height : fullHeight-30,
        alignItems : 'center'
    }
});
