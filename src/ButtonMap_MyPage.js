import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Icon, TouchableOpacity, Image } from 'react-native';
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
 
  openModal = (name) => this.setState({modalname:name, open: true});
 
  closeModal = () => this.setState({ open: false });
  render() {
//    var arr = ['경상북도','강원도','경기도','충청남도','충청북도','경상남도','전라남도','전라북도','울산광역시','부산광역시','광주광역시','대구광역시','대전광역시','인천광역시','제주특별자치도','서울특별시']
    return (
      <View style={styles.container}>
        <Image source={require("../images/logo.png")} style={styles.logo}/>
        <Image source={require("../images/Korea.png")} style={styles.Korea}/>
        <TouchableOpacity onPress={() => { this.openModal("경상북도") }}>
          <Image source={require("../images//Gb.png")} style={styles.Gb}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("강원도")}}>
          <Image source={require("../images/Gw.png")} style={styles.Gw}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("경기도")}}>
          <Image source={require("../images/Gy.png")} style={styles.Gy}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("충청남도")}}>
          <Image source={require("../images//Cn.png")} style={styles.Cn}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("충청북도")}}>
          <Image source={require("../images//Cb.png")} style={styles.Cb}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("경상남도")}}>
          <Image source={require("../images//Gn.png")} style={styles.Gn}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("전라남도")}}>
          <Image source={require("../images//Jn.png")} style={styles.Jn}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("전라북도")}}>
          <Image source={require("../images//Jb.png")} style={styles.Jb}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("울산광역시")}}>
          <Image source={require("../images//Us.png")} style={styles.Us}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("부산광역시")}}>
          <Image source={require("../images//Bs.png")} style={styles.Bs}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("광주광역시")}}>
          <Image source={require("../images//Gj.png")} style={styles.Gj}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("대구광역시")}}>
          <Image source={require("../images//Dg.png")} style={styles.Dg}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("대전광역시")}}>
          <Image source={require("../images//Dj.png")} style={styles.Dj}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("인천광역시")}}>
          <Image source={require("../images//Ic.png")} style={styles.Ic}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("제주특별자치도")}}>
          <Image source={require("../images//Jj.png")} style={styles.Jj}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.openModal("서울특별시")}}>
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
  logo: {
    position: 'absolute',
    resizeMode: 'contain',
    top: -10,
    left: 135,
    width: 110,
    height: 110,
  },
  Korea: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 100,
    left: -30,
    width: 450,
    height: 450,
  },
  Gy: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 126,
    left: 76,
    width: 122,
    height: 122,
  },
  Sl: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 171.3,
    left: 110,
    width: 30,
    height: 30,
  },
  Ic: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 146,
    left: 31.5,
    width: 103,
    height: 103,
  },
  Gw: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 88,
    left: 137,
    width: 160,
    height: 160,
  },
  Cb: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 218.3,
    left: 136.3,
    width: 113,
    height: 113,
  },
  Cn: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 224,
    left: 59,
    width: 117,
    height: 117,
  },
  Gb: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 142,
    left: 141,
    width: 240,
    height: 240,
  },
  Gn: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 335,
    left: 168,
    width: 118,
    height: 118,
  },
  Jb: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 300,
    left: 80,
    width: 110,
    height: 110,
  },
  Jn: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 365,
    left: 35,
    width: 150,
    height: 150,
  },
  Bs: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 375,
    left: 233,
    width: 60,
    height: 60,
  },
  Us: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 355.5,
    left: 270,
    width: 36,
    height: 36,
  },
  Dj: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 285,
    left: 141.5,
    width: 26,
    height: 26,
  },
  Gj: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 394,
    left: 97,
    width: 28,
    height: 28,
  },
  Dg: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 328,
    left: 223,
    width: 35.5,
    height: 35.5,
  },
  Jj: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 495,
    left: 60,
    width: 63,
    height: 63,
  },
  
  text: {
    color: '#ffffff',
    fontSize: 80
  }
});