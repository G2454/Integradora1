import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomePage';
import StackRoutes from './StackRoutes';

const Drawer = createDrawerNavigator();

function LogoutScreen({ navigation }) {
  useEffect(() => {
    // Simule a lógica de logout (ex: limpar tokens, deslogar do backend)
    console.log('Usuário deslogado!');

    // Redefina a pilha de navegação para ir ao Login
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }], // Nome da tela de login na pilha de navegação
      })
    );
  }, [navigation]);

  return null; // Não precisa renderizar nada
}

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home "
        component={HomeScreen}
        options={{ title: 'Todos os eventos', headerTitle: 'Eventos principais'}}
      />

      <Drawer.Screen
        name="Contact"
        component={StackRoutes}
        options={{ title: 'Contato', headerShown: false }}
      />

      <Drawer.Screen
        name="Log out"
        component={LogoutScreen} // Usa o componente customizado para logout
        options={{ title: 'Sair', headerShown: false, swipeEnabled: false, gestureEnabled: false }}
      />
    </Drawer.Navigator>
  );
}
