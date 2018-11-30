import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import data from './opensource.json';

export default class App extends Component {
  render() {
      
    var output = [];

    for (var i=0; i < data.opensource.length; i++) {
      output.push(
        <View>
          <Text style={styles.miniTitle}>
            {data.opensource[i].name}
          </Text>
          <View style={styles.textBG}>
            <Text style={styles.body2}>
              {data.opensource[i].license}
            </Text>
          </View>
        </View>
      )      
    }

    return (
      <View style={styles.container}>        
          <View style={{backgroundColor: '#00AFFF', flexDirection: 'row', height: 40,}}>
            <View style={{flex: 1, height: 40, justifyContent: 'center', alignItems: 'center',}}>
            </View>
            
            <View style={{flex: 6, height: 50, justifyContent: 'center',alignSelf: 'center'}}>
              <Text style={styles.title}>License</Text>
            </View>
            
            <View style={{flex: 1, height: 40}}>
            </View>
          </View>

          <ScrollView>
          <Text style={styles.body1}>The following sets forth attribution notices for third party software that may be contained in portions of the Travel GO product. We thank the open source community for all of their contributions.</Text>
          {output}
        </ScrollView>
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    },

    title:{
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      alignContent: 'center'
    },

    body1:{
      fontSize: 16,
      margin: 15
    },

    miniTitle:{
      fontSize: 20,
      color: '#00AFFF',
      marginLeft: 15,
      marginBottom: 5,
    },

    body2:{
      fontSize: 14,
    },

    textBG:{
      backgroundColor: '#F2F2F2',
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 15,
      padding: 5,
      borderColor: '#BDBDBD',
      borderWidth: 1,
    },

});