import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './AuthProvider.js';
import TelaLogin from './telas/TelaLogin';
import TelaInicial from './telas/TelainIcial';
import TelaReunioes from './telas/TelaReunioes.js';

const Stack = createStackNavigator();

const Routes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="TelaInicial" component={TelaInicial} />
            <Stack.Screen name="TelaReunioes" component={TelaReunioes} />
            {/* Adicione outras telas protegidas aqui */}
          </>
        ) : (
          <Stack.Screen name="TelaLogin" component={TelaLogin} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
