import React, {Component} from 'react';

import Navigation from './src/Navigation';
import ScreenLoading from './src/Loading';
import screenLogin from './src/Login';

const JEnum = require('./src/JEnum.js')


export default class App extends Component {
    state = {
        currentPage : ScreenLoading
    }
    constructor(props) {
        JEnum.axios.get(JEnum.userInfo)
        .then(response => {
            if(response.data.isLogin) {
                this.setState({
                    currentPage : Navigation
                })    
            } else {
                this.setState({
                    currentPage : screenLogin
                })
            }
        })
        .catch(function (error) {
            alert(error);
            console.log(error);
        });        
        super(props)
        // setTimeout(() => {
        //     this.setState({
        //         currentPage : Navigation
        //     })
        // }, 1000);
    }
    render() {
        return (
            <this.state.currentPage/>
        );
    }
}

