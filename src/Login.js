import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, TextInput, TouchableOpacity, Image} from 'react-native';
const JEnum = require('./JEnum.js');

var fullWidth = Dimensions.get('window').width; //full width
var fullHeight = Dimensions.get('window').height; //full height

export default class App extends Component {
    state = {
        username : "",
        password : ""
    }
    onLogin = () => {
        JEnum.axios.post(JEnum.login, {
            "username" : this.state.username,
            "password" : this.state.password,
        })
        .then(response => {
            if(response.data.status) {
                this.props.change("loading");
                this.props._id(response.data._id)
            } else {
                alert("아이디 또는 비밀번호가 맞지 않습니다.");
            }
        })
        .catch(function (error) {
            alert(error);
            console.log(error);
        });
    }
    onRegist = () => {
        this.props.change("register");
    }
    render() {
        return (
            <View style={styles.view}>
                <View style={styles.inner}>

                    <Image source={require("../images/logo.png")} style={styles.ImageBackground}></Image>


                    <Text style={styles.h1}>트래블러 로그인</Text>
                    <Text style={styles.h2}>USERNAME</Text>
                    <TextInput value={this.state.username} placeholder="Username" style={styles.input} onChangeText={(text) => {this.setState({username:text})}}/>
                    <Text style={styles.h2}>PASSWORD</Text>
                    <TextInput value={this.state.password} placeholder="Password" style={styles.input} onChangeText={(text) => {this.setState({password:text})}} secureTextEntry={true}/>
                    <TouchableOpacity
                        onPress={this.onLogin}
                        style={styles.button}
                    >
                        <View>
                            <Text style={{
                                fontSize : 20,
                                color : '#fff',
                                textAlign : "center"
                            }}> LOGIN </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onRegist}
                        style={[styles.button, {marginTop:5,backgroundColor:'#313131'}]}
                    >
                        <View>
                            <Text style={{
                                fontSize : 20,
                                color : '#fff',
                                textAlign : "center"
                            }}> REGISTER </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    h1 : {
        fontSize : 20
    },
    h2 : {
        fontSize : 10,
        marginTop : 10
    },
    view : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        textAlignVertical : "center",
        textAlign : "center"
    },
    inner : {
        width : 250,
        alignItems : "flex-start",
        textAlign : "left"
    },
    input : {
        alignSelf: 'stretch',
        padding : 10,
        fontSize : 15,
        backgroundColor : "#eeeeee",
        marginTop : 5
    },
    button : {
        padding : 15,
        marginTop : 15,
        backgroundColor : '#ff5959',
        alignSelf : "stretch",
    },
    ImageBackground: {
        width: 150,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        marginBottom: 50
    },
});
