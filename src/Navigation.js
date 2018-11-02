import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';

// import ScreenSetting from './Main';
// import ScreenMain from './Setting';

var fullWidth = Dimensions.get('window').width; //full width
// var height = Dimensions.get('window').height; //full height

export default class App extends Component {
    state = {
        currentLocation : "서울특별시 성북구 정릉3동",
    }
    openModal = (type) => {
        alert(type);
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
    }
});
