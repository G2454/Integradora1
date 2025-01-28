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
    <Drawer.Navigator initialRouteName="Home" drawerStyle={{ width: '100%' }}>
      <Drawer.Screen
        name="Meu Perfil"
        component={StackRoutes}
        options={{ title: 'Meu Perfil', headerShown: false }}
      />
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Todos os eventos', headerTitle: 'Eventos' }}
      />
      <Drawer.Screen
        name="Contact"
        component={StackRoutes}
        options={{ title: 'Contato', headerShown: false }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{ title: 'Logout', headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
