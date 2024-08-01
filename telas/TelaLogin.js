import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usersData from '../users.json'; // Certifique-se de que o caminho está correto

const TelaLogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

  const handleLogin = () => {
    const user = usersData.find(user => user.email === email && user.password === password);

    if (user) {
      Alert.alert('Login Completo!', `Bem-vindo(a), ${user.name}!`);
      // Redirecionar para outra tela ou realizar outras ações
      navigation.navigate('TelaInicial');
    } else {
      Alert.alert('Falha no Login', 'Email ou senha inválidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/codeLogo/logo.png')} style={styles.logo} />
      <Image source={require('../assets/botoes/macacode.png')} style={styles.macacode} />

      <View style={styles.containerLogin}>
        <TextInput
          style={styles.input}
          placeholder="E-mail:"
          keyboardType="email-address"
          value={email}
          onChangeText={handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha:"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6E1385',
  },
  containerLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "80%",
    height: "16%",
    margin: "5%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  macacode: {
    margin: "10%",
    width: "63%",
    height: "30%",
  },
  logo: {
    width: "85%",
    height: "10%",
  },
  input: {
    width: "80%",
    backgroundColor: "white",
    borderWidth: 4,
    borderColor: '#FAFF00',
    padding: 8,
    marginBottom: 16,
    borderRadius: 79,
    fontWeight: 'bold',
    fontSize: 16,
    color: "#1E1E1E",
  },
  button: {
    marginTop: "10%",
    width: '40%',
    padding: 15,
    backgroundColor: '#ffce07',
    borderRadius: 79,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default TelaLogin;
