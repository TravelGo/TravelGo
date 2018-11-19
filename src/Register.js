import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input'; 
const JEnum = require('./JEnum.js')

var fullWidth = Dimensions.get('window').width; //full width
var fullHeight = Dimensions.get('window').height; //full height

export default class App extends Component {
    state = {
        username : "",
        password : "",
        password2 : "",
        fullname : "",
        phone : "",
    }
    onLogin = () => {
        this.props.change("login")
    }
    onRegist = () => {
        const username = this.state.username;
        const password = this.state.password;
        const password2 = this.state.password2;
        const phone = this.state.phone;
        const fullname = this.state.fullname;
        if(!password || password !== password2) {
            alert("같은 비밀번호를 입력해주세요.")
            return;
        }
        JEnum.axios.post(JEnum.regist, {
            "username" : username,
            "password" : password,
            "fullname" : fullname,
            "phone" : phone
        })
        .then(response => {
            if(response.data === "AccountCreateSuccess") {
                alert("회원가입을 환영합니다.");
            } else {
                alert(response.data);
            }
        })
        .catch(function (error) {
            alert(error);
            console.log(error);
        });
    }
    render() {
        return (
            <ScrollView>
                <View style={[styles.view]}>
                    <View style={[styles.inner, {marginTop:30}]}>
                        <Text style={styles.h1}>트라벨클럽 가입</Text>
                        <Text style={styles.h2}>Fullname</Text>
                        <TextInput placeholder="Fullname" style={styles.input} onChangeText={(text) => {this.setState({fullname:text})}}/>
                        <Text style={styles.h2}>Phone</Text>
                        <TextInput placeholder="Phone" style={styles.input} onChangeText={(text) => {this.setState({phone:text})}}/>
                        <Text style={styles.h2}>USERNAME</Text>
                        <TextInput placeholder="Username" style={styles.input} onChangeText={(text) => {this.setState({username:text})}}/>
                        <Text style={styles.h2}>PASSWORD</Text>
                        <TextInput placeholder="Password" style={styles.input} onChangeText={(text) => {this.setState({password:text})}} secureTextEntry={true}/>
                        <Text style={styles.h2}>PASSWORD CHECK</Text>
                        <TextInput placeholder="Password Check" style={styles.input} onChangeText={(text) => {this.setState({password2:text})}} secureTextEntry={true}/>
                        <TouchableOpacity
                            onPress={this.onRegist}
                            style={styles.button}
                        >
                            <View>
                                <Text style={{
                                    fontSize : 20,
                                    color : '#fff',
                                    textAlign : "center"
                                }}> REGISTER </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.onLogin}
                            style={[styles.button, {marginTop:5,backgroundColor:'#313131'}]}
                        >
                            <View>
                                <Text style={{
                                    fontSize : 20,
                                    color : '#fff',
                                    textAlign : "center"
                                }}> LOGIN </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
        textAlign : "center",
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
    }
});
