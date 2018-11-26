import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Switch, TouchableOpacity, Image, Dimensions, ScrollView, ImageBackground} from 'react-native';

export default class App extends Component {

  render() {

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

          <Text style={styles.miniTitle}>React Native</Text>
          <View style={styles.textBG}>
            <Text style={styles.body2}>
              MIT License
              {"\n"}{"\n"}
              Copyright (c) Facebook, Inc. and its affiliates.
              {"\n"}{"\n"}
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the "Software"), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions: 
              {"\n"}{"\n"}
              The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.  
              {"\n"}{"\n"}
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              SOFTWARE.
            </Text>
          </View>

          <Text style={styles.miniTitle}>MongoDB</Text>
          <View style={styles.textBG}>
            <Text style={styles.body2}>
              Our goal in selecting the Server Side Public License (SSPL) v1.0, an open source license introduced by MongoDB, as our open source license is to require that enhancements to MongoDB be released to the community. We also make our drivers available under the Apache License v2.0.
              {"\n"}{"\n"}
              If use of our drivers under the Apache License v2.0 or the database under the SSPL v1.0 does not satisfy your organization’s legal department, commercial licenses are available with MongoDB Enterprise Advanced. Feel free to contact us for more details.
            </Text>
          </View>

          <Text style={styles.miniTitle}>Mongoose</Text>
          <View style={styles.textBG}>
            <Text style={styles.body2}>
              {/* Copyright (c) 2004-2013 Sergey Lyubka <valenok@gmail.com> */}
              Copyright (c) 2013-2018 Cesanta Software Limited
              All rights reserved
              {"\n"}{"\n"}
              This software is dual-licensed: you can redistribute it and/or modify
              it under the terms of the GNU General Public License version 2 as
              published by the Free Software Foundation. For the terms of this
              {/* license, see <http://www.gnu.org/licenses/>. */}
              {"\n"}{"\n"}
              You are free to use this software under the terms of the GNU General
              Public License, but WITHOUT ANY WARRANTY; without even the implied
              warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
              See the GNU General Public License for more details.
              {"\n"}{"\n"}
              Alternatively, you can license this software under a commercial
              {/* license, as set out in <https://www.cesanta.com/license>. */}
            </Text>
          </View>

          <Text style={styles.miniTitle}>React Native</Text>
          <View style={styles.textBG}>
            <Text style={styles.body2}>
              MIT License
              {"\n"}{"\n"}
              Copyright (c) Facebook, Inc. and its affiliates.
              {"\n"}{"\n"}
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the "Software"), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions: 
              {"\n"}{"\n"}
              The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.  
              {"\n"}{"\n"}
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              SOFTWARE.
            </Text>
          </View>

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
      // marginLeft: 15,
      // marginBottom: 15,
      margin: 15
    },

    miniTitle:{
      fontSize: 20,
      color: '#00AFFF',
      // fontWeight: 'bold',
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