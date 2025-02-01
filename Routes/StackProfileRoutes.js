import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/ProfileScreen/Profile';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function StackProfileRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Meu perfil"
        component={Profile}
        options={({ navigation }) => ({
          headerTitleStyle: { 
            fontSize: 24, // Altere para o tamanho desejado
            fontWeight: 'regular', // Opcional, para destacar mais
          },
          headerShown: true,
          headerTitle: 'Meu Perfil',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: '#000',
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
