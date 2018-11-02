import React, {Component} from 'react';

import Navigation from './src/Navigation';
import ScreenLoading from './src/Loading';

export default class App extends Component {
    state = {
        currentPage : ScreenLoading
    }
    constructor(props) {
        super(props)
        setTimeout(() => {
            this.setState({
                currentPage : Navigation
            })
        }, 1000);
    }
    render() {
        return (
            <this.state.currentPage/>
        );
    }
}

