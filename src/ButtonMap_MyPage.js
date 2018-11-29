import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Icon, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import Modal from "react-native-simple-modal"

export default class Position extends React.Component {
  state = { open: false};

  modalDidOpen = () => console.log();
 
  modalDidClose = () => {
    this.setState({ open: false });
    console.log("Modal did close.");
  };
 
  moveUp = () => this.setState({ offset: -100 });
 
  resetPosition = () => this.setState({ offset: 0 });
 
  openModal = (name) => this.setState({modalname: this.dicModal[name], open: true});
 
  closeModal = () => this.setState({ open: false });

  dicModal = { 
    "Gb":"경상북도", "Gw":"강원도", "Gy":"경기도", "Cn":"충청남도", "Cb":"충청북도", 
    "Gn":"경상남도", "Jn":"전라남도", "Jb":"전라북도", "Us":"울산광역시", "Bs":"부산광역시",
    "Gj":"광주광역시", "Dg":"대구광역시", "Dj":"대전광역시", "Ic":"인천광역시", "Jj":"제주특별자치도", "Sl":"서울특별시"
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../images//Korea.png")} style={styles.Korea}/>
        <TouchableOpacity onPress={() => { this.openModal("Gb") }}>
          <Image source={require("../images//Gb.png")} style={styles.Gb}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("Gw")}}>
        <Image source={require("../images//Gw.png")} style={styles.Gw}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("Gy")}}>
          <Image source={require("../images//Gy.png")} style={styles.Gy}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("Cn")}}>
          <Image source={require("../images//Cn.png")} style={styles.Cn}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("Cb")}}>
          <Image source={require("../images//Cb.png")} style={styles.Cb}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("Gn")}}>
          <Image source={require("../images//Gn.png")} style={styles.Gn}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("Jn")}}>
          <Image source={require("../images//Jn.png")} style={styles.Jn}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("Jb")}}>
          <Image source={require("../images//Jb.png")} style={styles.Jb}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("Us")}}>
          <Image source={require("../images//Us.png")} style={styles.Us}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("Bs")}}>
          <Image source={require("../images//Bs.png")} style={styles.Bs}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("Gj")}}>
          <Image source={require("../images//Gj.png")} style={styles.Gj}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("Dg")}}>
          <Image source={require("../images//Dg.png")} style={styles.Dg}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("Dj")}}>
          <Image source={require("../images//Dj.png")} style={styles.Dj}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("Ic")}}>
          <Image source={require("../images//Ic.png")} style={styles.Ic}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("Jj")}}>
          <Image source={require("../images//Jj.png")} style={styles.Jj}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("Sl")}}>
          <Image source={require("../images/Sl.png")} style={styles.Sl}/>
        </TouchableOpacity>
        <Modal
          offset={this.state.offset}
          open={this.state.open}
          modalDidOpen={this.modalDidOpen}
          modalDidClose={this.modalDidClose}
          style={{ alignItems: "center" }}
        >
          <View style={{ alignItems: "center" }}>
            <Text>
              {this.state.modalname}의 포켓스탑은 100개입니다.
              36개 방문하셨습니다.
            </Text>
            <TouchableOpacity onPress={this.openModal}>
              <Text>{
                "포켓스탑 리스트 보러가기 ->"
              }</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Korea: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 40,
    left: -30,
    width: 450,
    height: 450,
  },
  Gy: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 66,
    left: 76,
    width: 122,
    height: 122,
  },
  Sl: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 111.3,
    left: 110,
    width: 30,
    height: 30,
  },
  Ic: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 86,
    left: 31.5,
    width: 103,
    height: 103,
  },
  Gw: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 28,
    left: 137,
    width: 160,
    height: 160,
  },
  Cb: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 158.3,
    left: 136.3,
    width: 113,
    height: 113,
  },
  Cn: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 164,
    left: 59,
    width: 117,
    height: 117,
  },
  Gb: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 82,
    left: 141,
    width: 240,
    height: 240,
  },
  Gn: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 275,
    left: 168,
    width: 118,
    height: 118,
  },
  Jb: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 240,
    left: 80,
    width: 110,
    height: 110,
  },
  Jn: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 305,
    left: 35,
    width: 150,
    height: 150,
  },
  Bs: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 315,
    left: 233,
    width: 60,
    height: 60,
  },
  Us: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 295.5,
    left: 270,
    width: 36,
    height: 36,
  },
  Dj: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 225,
    left: 141.5,
    width: 26,
    height: 26,
  },
  Gj: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 334,
    left: 97,
    width: 28,
    height: 28,
  },
  Dg: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 268,
    left: 223,
    width: 35.5,
    height: 35.5,
  },
  Jj: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 435,
    left: 60,
    width: 63,
    height: 63,
  },
  
  text: {
    color: '#ffffff',
    fontSize: 80
  }
});

