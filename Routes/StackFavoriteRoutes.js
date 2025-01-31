import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Favorite from '../screens/FavoriteScreen/Favorite';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function StackFavoriteRoutes() {
  return (
    <Stack.Navigator>
      {/* Tela de Contato */}
      <Stack.Screen
        name="Favoritos"
        component={Favorite}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: 'Eventos favoritados',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: '#000',
          headerTitleStyle: { 
            fontSize: 24, // Altere para o tamanho desejado
            fontWeight: 'regular', // Opcional, para destacar mais
          },
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="black"
              onPress={() => navigation.goBack()} // Navegar de volta
              style={{ marginLeft: 10 }}
            />
          ),
        })}
      />

    </Stack.Navigator>
  );
}

