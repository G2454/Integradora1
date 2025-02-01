import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native';
import { View, Text, Image, StyleSheet,} from 'react-native';
import HomeScreen from '../screens/HomeScreen/HomePage';
import StackProfileRoutes from './StackProfileRoutes';
import StackContactRoutes from './StackContactRoutes';
import StackFavoriteRoutes from './StackFavoriteRoutes';
import Event from '../screens/EventScreen/Event'; 
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import StackEventRoutes from './StackEvent';

const Drawer = createDrawerNavigator();

// Componente personalizado do Drawer
function CustomDrawerContent(props) {
  const handleLogout = () => {
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }], // Redireciona diretamente para o Login
      })
    );
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Image
          source={require('../src/assets/menuphoto.png')} // Certifique-se de que o caminho está correto
          style={styles.profileImage}
        />
        <Text style={styles.username}>Fulano de Tal</Text>
      </View>

      {/* Itens de navegação */}
      <DrawerItemList {...props} />

      {/* Botão de logout na parte inferior */}
      <View style={styles.logoutContainer}>
        <DrawerItem
          label="Sair"
          onPress={handleLogout}
          icon={({ color, size }) => <Ionicons name="log-in-outline" size={24} color="#767676" />}
          labelStyle={{ color: '#000000', fontWeight: 'regular' }}
          style={styles.logoutButton}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: '100%', // Faz o Drawer ocupar a tela inteira
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0, 
        },
        
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        
        options={{ 
          drawerLabelStyle: { color: '#000000' },
          title: 'Todos os eventos',
          headerTitle: 'Eventos',
          headerTitleStyle: { 
            fontSize: 24, // Altere para o tamanho desejado
            fontWeight: 'regular', // Opcional, para destacar mais
          },
          drawerIcon: ({ color, size }) => <Feather name="calendar" size={24} color="#767676" />,
        }}
      />

      <Drawer.Screen
        name="Event"
        component={StackEventRoutes}
        options={{ 
          drawerLabelStyle: { color: '#000000' },
          title: 'Criar evento',
          headerShown: false,
          headerTitle: 'Eventos',
          drawerIcon: ({ color, size }) => <Feather name="message-circle" size={24} color="#767676" />,
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={StackProfileRoutes}
        options={{ 
          drawerLabelStyle: { color: '#000000' },
          title: 'Meu Perfil', 
          headerShown: false,
          drawerIcon: ({ color, size }) => <Feather name="user" size={24} color="#767676" />,
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={StackFavoriteRoutes}
        options={{ 
          drawerLabelStyle: { color: '#000000' },
          title: 'Eventos favoritados', 
          headerShown: false ,
          drawerIcon: ({ color, size }) => <Feather name="bookmark" size={24} color="#767676" />,
        }}
      />

      <Drawer.Screen
        name="Contact"
        component={StackContactRoutes}
        options={{ 
          drawerLabelStyle: { color: '#000000' },
          title: 'Contato', 
          headerShown: false ,
          drawerIcon: ({ color, size }) => <Feather name="mail" size={24} color="#767676" />,
        }}
      />
    </Drawer.Navigator>
  );
}


// Estilos do menu lateral
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  drawerHeader: {
    alignItems: 'left',
    justifyContent: 'left',
    paddingVertical: 20,
    paddingLeft: 20,
    marginBottom: 25,
    backgroundColor: 'white',
  },
  profileImage: {
    width: 113,
    height: 113,
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 10,
  },
  username: {
    fontSize: 19,
    fontWeight: 'regular',
    color: '#000000',
  },
  logoutContainer: {
    marginTop: 'auto', // Empurra o botão para baixo
    paddingVertical: 20,
    paddingLeft: 10,
    marginBottom: 40,
  },
});
