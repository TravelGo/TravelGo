import React, {Component} from 'react';

import Navigation from './src/Navigation';
import ScreenLoading from './src/Loading';
import ScreenLogin from './src/Login';
import ScreenRegister from './src/Register';
import ScreenTravelStop from './src/travelStop';
import ScreenBoard from './src/Board';
import ScreenChatting from './src/Chatting';
import ScreenMypage from './src/Mypage';

const JEnum = require('./src/JEnum.js')


export default class App extends Component {
    state = {
        currentPage : ScreenLoading,
        _id : "",
    }
    change = (category) => {
        if(category === "register") {
            this.setState({
                currentPage : ScreenRegister
            })
        } else if(category === "login") {
            this.setState({
                currentPage : ScreenLogin
            })
        } else if(category === "travelStop" || category === "travelstop") {
            this.setState({
                currentPage : ScreenTravelStop
            })
        } else if(category === "board") {
            this.setState({
                currentPage : ScreenBoard
            })
        } else if(category === "mypage") {
            this.setState({
                currentPage : ScreenMypage
            })
        } else if(category === "chatting") {
            this.setState({
                currentPage : ScreenChatting
            })
        } else {
            this.setState({
                currentPage : Navigation
            })
        }
    }
    travelStop = (id, move=true) => {
        this.change("travelStop");
        if(move) {
            this.setState({
                travelStopId : id
            })
        }
    }
    _id = (a) => {
        this.setState({
            _id : a
        })
    }
    constructor(props) {
        super(props);
        JEnum.axios.get(JEnum.userInfo)
        .then(response => {
            setTimeout(() => {
                if(response.data.isLogin) {
                    this.setState({
                        currentPage : Navigation
                    })
                } else {
                    this.setState({
                        currentPage : ScreenLogin
                    })
                }
            }, 1000);
        })
        .catch(function (error) {
            alert(error);
            console.log(error);
        });
    }
    render() {
        return (
            <this.state.currentPage _id={this._id} userID={this.state._id} change={this.change} travelStop={this.travelStop} travelStopId={this.state.travelStopId}/>
        );
    }
}
