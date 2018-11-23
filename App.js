import React, {Component} from 'react';

import Navigation from './src/Navigation';
import ScreenLoading from './src/Loading';
import ScreenLogin from './src/Login';
import ScreenRegister from './src/Register';
import ScreenTravelStop from './src/travelStop';

const JEnum = require('./src/JEnum.js')


export default class App extends Component {
    state = {
        currentPage : ScreenLoading
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
        } else if(category === "travelStop") {
            this.setState({
                currentPage : ScreenTravelStop
            })
        } else {
            this.setState({
                currentPage : Navigation
            })
        }
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
            <this.state.currentPage change={this.change}/>
        );
    }
}

