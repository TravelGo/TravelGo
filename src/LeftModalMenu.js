import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight, Dimensions} from 'react-native';

let title = "Timeline"

var fullWidth = Dimensions.get('window').width; //full width
var fullHeight = Dimensions.get('window').height; //full height

export default class App extends Component {
    
    render() {
        let items = []
        for(let i=0;i<this.props.menu.length;i++) {
            {
                items.push(
                    <TouchableHighlight onPress={()=>{this.props.change(this.props.menu[i].screen)}}>
                        <View style={styles.view}>
                                <Image source={this.props.menu[i].icon} style={styles.menuIcon}/>
                                <Text style={styles.menu}>{this.props.menu[i].name}</Text>
                        </View>
                    </TouchableHighlight>
                )
                this.props.menu[i].name,
                this.props.menu[i].icon,
                this.props.menu[i].screen
            }
        }
        return (
            <View>
                {items}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view : {
        flexDirection : "row",
        margin : 15,
        width : fullWidth * 0.6
    },
    menuIcon : {
        width : 25,
        height : 25,
        marginTop : 8,
        marginRight : 10,
    },
    menu : {
        fontSize : 25,
        color : '#fff',
        // borderStyle : "solid",
        // borderBottomWidth : 2,
        // borderBottomColor : '#fff',
    }
});
