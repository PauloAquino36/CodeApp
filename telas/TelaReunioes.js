import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Navbar from './NavBar.js';



const TelaReunioes = () => {
  return (
        <View style={styles.container}>
          <View style={styles.containerNavbar}>
            <Navbar></Navbar>
          </View>
        <Image source={require('../assets/codeLogo/logo.png')} style={styles.logo}></Image>
        <View style={styles.listaBotoes}>
          <TouchableOpacity style={styles.botoes}>
            <Image source={require('../assets/botoes/comercial.png')} style={styles.botoesImg}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Image source={require('../assets/botoes/marketing.png')} style={styles.botoesImg}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Image source={require('../assets/botoes/projetos.png')} style={styles.botoesImg}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Image source={require('../assets/botoes/gp.png')} style={styles.botoesImg}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Image source={require('../assets/botoes/rg.png')} style={styles.botoesImg}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Image source={require('../assets/botoes/outras.png')} style={styles.botoesImg}></Image>
          </TouchableOpacity>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  containerNavbar:{
    borderColor: "white",
    width: "100%",
    height: "20%",
    borderWidth: 1,
    zIndex: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6E1385',
    
  },
  listaBotoes: {
    width: "80%",
    height: "60%",
    margin: "5%",
    justifyContent: 'space-between',
    flexDirection: "row",
    flexWrap: "wrap",
    //
    borderColor: "green",
    borderWidth: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: "85%",
    height: "10%",
    //
    borderColor: "red",
    borderWidth: 1,
  },
  botoesImg: {
    width: "100%",
    height: "80%",
   // marginStart: "10%",
    //marginTop: "25%",
    //
    //borderColor: "blue",
    //borderWidth: 1,
  },
  botoes: {
    width: "40%",
    height: "32%",
    marginHorizontal: "5%",
    marginTop: "5%",
    //
    //borderColor: "red",
    //borderWidth: 1,
  }
});

export default TelaReunioes;
