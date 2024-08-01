import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  const [ocultarBotoes, mostrarBotoes] = useState(false);

  const btnNavbar = () => {
    mostrarBotoes(!ocultarBotoes);
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navButton} onPress={btnNavbar}>
        <Image source={require('../assets/botoes/macacode.png')} style={styles.botoesImg}></Image>
      </TouchableOpacity>
      
      {ocultarBotoes && (
        

          <View style={styles.listaBotoes}>
            <TouchableOpacity style={styles.botoes}>
              <Image source={require('../assets/botoes/membrosNavbar.png')} style={styles.botoesImgNavBar}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botoes} onPress={() => navigation.navigate('TelaReunioes')}>
              <Image source={require('../assets/botoes/reunioesNavbar.png')} style={styles.botoesImgNavBar}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botoes}>
              <Image source={require('../assets/botoes/sistemaejNavbar.png')} style={styles.botoesImgNavBar}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botoes}>
              <Image source={require('../assets/botoes/calendarioNavbar.png')} style={styles.botoesImgNavBar}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botoes}>
              <Image source={require('../assets/botoes/sair.png')} style={styles.botoesImgNavBar}></Image>
            </TouchableOpacity>
          </View>
        

      )}

    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: "53%",
    width: "23%",
    margin: "3%",
    marginTop: "5%",
    flexDirection: 'column',
    alignItems: 'flex-start',

    //
    //borderColor: "green",
    //borderWidth: 1,
  },
  navButton: {
    height: "100%",
    width: "100%",
  },
  botoesImg: {
    height: "100%",
    width: "100%",
  },
  listaBotoes: {
    width: "100%",
    height: "100%",
    margin: "5%",
  },
  botoes: {
    margin: "5%",
  },
  botoesImgNavBar: {
    height: "100%",
    width: "100%",
  },
});

export default Navbar;
