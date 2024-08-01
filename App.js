import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './telas/TelainIcial';
import TelaReunioes from './telas/TelaReunioes';
import TelaNavbar from './telas/TelaNavBar';
import TelaLogin from './telas/TelaLogin';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
          <Stack.Screen name="TelaInicial" component={TelaInicial} />
          <Stack.Screen name="TelaReunioes" component={TelaReunioes} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
