import React, { Component } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

var fullWidth = Dimensions.get('window').width; //full width
var fullHeight = Dimensions.get('window').height; //full height


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>


                <TopBar />
                <TstopList />


            </View>
        );
    }
}

class TopBar extends Component {
    render() {
        return (
            <View style={styles.Top}>
                <Text style={{ fontSize: 25, color: '#FFFFFF', fontWeight: 'bold' }}>
                    추천 트래블 스탑
        </Text>
            </View>
        )
    }
}

class TstopList extends Component {
    render() {
        return (
            <View
                style={{ flex: 10, backgroundColor: '#ABCDEF', alignSelf: 'stretch' }}
            >

                <ScrollView style={{ flexDirection: 'column', backgroundColor: 'white' }}>

                    <View style={styles.rowStyle}>
                        <Image
                            style={styles.T_view}
                            source={{ uri: 'http://www.doopedia.co.kr/_upload/image4/1711/03/171103021618274/171103021618274_thumb_400.jpg' }}
                        ></Image>

                        <Image
                            style={styles.T_view}
                            source={{ uri: 'http://www.doopedia.co.kr/_upload/image4/1711/03/171103021618274/171103021618274_thumb_400.jpg' }}
                        ></Image>
                    </View>

                    <View style={styles.rowStyle}>
                        <Image
                            style={styles.T_view}
                            source={{ uri: 'http://www.doopedia.co.kr/_upload/image4/1711/03/171103021618274/171103021618274_thumb_400.jpg' }}
                        ></Image>

                        <Image
                            style={styles.T_view}
                            source={{ uri: 'http://www.doopedia.co.kr/_upload/image4/1711/03/171103021618274/171103021618274_thumb_400.jpg' }}
                        ></Image>
                    </View>

                    <View style={styles.rowStyle}>
                        <Image
                            style={styles.T_view}
                            source={{ uri: 'http://www.doopedia.co.kr/_upload/image4/1711/03/171103021618274/171103021618274_thumb_400.jpg' }}
                        ></Image>

                        <Image
                            style={styles.T_view}
                            source={{ uri: 'http://www.doopedia.co.kr/_upload/image4/1711/03/171103021618274/171103021618274_thumb_400.jpg' }}
                        ></Image>
                    </View>

                    <View style={styles.rowStyle}>
                        <Image
                            style={styles.T_view}
                            source={{ uri: 'http://www.doopedia.co.kr/_upload/image4/1711/03/171103021618274/171103021618274_thumb_400.jpg' }}
                        ></Image>

                        <Image
                            style={styles.T_view}
                            source={{ uri: 'http://www.doopedia.co.kr/_upload/image4/1711/03/171103021618274/171103021618274_thumb_400.jpg' }}
                        ></Image>
                    </View>

                    <View style={styles.rowStyle}>
                        <Image
                            style={styles.T_view}
                            source={{ uri: 'http://www.doopedia.co.kr/_upload/image4/1711/03/171103021618274/171103021618274_thumb_400.jpg' }}
                        ></Image>

                        <Image
                            style={styles.T_view}
                            source={{ uri: 'http://www.doopedia.co.kr/_upload/image4/1711/03/171103021618274/171103021618274_thumb_400.jpg' }}
                        ></Image>
                    </View>

                    <View style={styles.rowStyle}>
                        <Image
                            style={styles.T_view}
                            source={{ uri: 'http://www.doopedia.co.kr/_upload/image4/1711/03/171103021618274/171103021618274_thumb_400.jpg' }}
                        ></Image>

                        <Image
                            style={styles.T_view}
                            source={{ uri: 'http://www.doopedia.co.kr/_upload/image4/1711/03/171103021618274/171103021618274_thumb_400.jpg' }}
                        ></Image>
                    </View>

                </ScrollView>


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width : fullWidth
    },

    Top: {
        flex: 1,
        backgroundColor: '#545454',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginBottom: 5,
    },

    // welcome: {
    //   flex: 1,
    //   backgroundColor: 'orange',
    //   margin: 5,
    //   textAlign: 'center',
    //   fontSize: 100,
    //   aspectRatio: 1,
    // },

    T_view: {
        flex: 1,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        margin: 3,
        borderWidth: 1,
        borderColor: '#A4A4A4',
    },

    rowStyle: {
        marginRight: 20,
        marginLeft: 20,
        flex: 1,
        flexDirection: 'row',
    },

    // instructions: {
    //   textAlign: 'center',
    //   color: '#333333',
    //   marginBottom: 5,
    // },
});
