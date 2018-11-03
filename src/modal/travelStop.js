import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

var fullWidth = Dimensions.get('window').width; //full width
var fullHeight = Dimensions.get('window').height; //full height

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>TravelStop</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#eee',
        width : fullWidth * 0.9,
        height : fullHeight * 0.9,
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
        padding : 10,
    }
});
