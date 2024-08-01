import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from './NavBar.js';

const TelaNavbar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar/>
      <View style={styles.content}>
        <Text style={styles.text}>Conteúdo da tela</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default TelaNavbar;
