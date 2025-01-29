import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native';
import { DrawerContentScrollView } from '@react-navigation/drawer'; // Import necessário
import { View, Text, Image, StyleSheet} from 'react-native'; // Importando os componentes necessários
import HomeScreen from '../screens/HomeScreen/HomePage';
import StackProfileRoutes from './StackProfileRoutes';
import StackContactRoutes from './StackContactRoutes';

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
        <View >
            <Text>Seu Nome</Text>
        </View>
    
    <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Todos os eventos', headerTitle: 'Eventos' }}
      />

      <Drawer.Screen
        name= "Profile"
        component={StackProfileRoutes}
        options={{ title: 'Perfil', headerShown: false }}
      />  

      <Drawer.Screen
        name="Contact"
        component={StackContactRoutes}
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

const styles = StyleSheet.create({
  
 
})