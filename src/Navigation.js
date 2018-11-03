import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';

// import ScreenSetting from './Main';
// import ScreenMain from './Setting';

// 왼쪽 모달 뷰어
import LeftModalMenu from './LeftModalMenu';

// 왼쪽 모달
import ModalRecommanded from './modal/recommanded'; // 추천
import ModalVisitied from './modal/visitied'; // 방문한
import ModalNearby from './modal/nearby'; // 근처

// 오른쪽 모달
import ModalSetting from './modal/setting'; // 세팅

var fullWidth = Dimensions.get('window').width; //full width
var fullHeight = Dimensions.get('window').height; //full height

export default class App extends Component {
    state = {
        currentLocation : "서울특별시 성북구 정릉3동",
        isOpen : false,
        menuItems : <View></View>,
        modalInner : LeftModalMenu
    }

    modal = {
        "recommanded" : ModalRecommanded,
        "visitied" : ModalVisitied,
        "nearby" : ModalNearby,
    }

    leftModalItems = [
        {
            icon : require('../images/thumb.png'),
            name : "추천 포케스탑",
            screen : "recommanded"
        },
        {
            icon : require('../images/marker.png'),
            name : "방문한 포케스탑",
            screen : "visitied"
        },
        {
            icon : require('../images/wifi.png'),
            name : "주변 포케스탑",
            screen : "nearby"
        },
    ]


    modalChange = (screen) => {
        this.setState({
            modalInner : this.modal[screen]
        });
    }
    openModal = (type) => {
        this.setState({
            isOpen : true,
            modalType : type,
            modalInner : LeftModalMenu
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
                <Text>asd</Text>
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
                    <View style={[styles.modal, {top:(this.state.isOpen)?fullHeight*(1-0.98):fullHeight}]}>
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
