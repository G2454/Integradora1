import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Event from '../screens/EventScreen/Event';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function StackEventRoutes() {
  return (
    <Stack.Navigator>
      {/* Tela de Contato */}
      <Stack.Screen
        name="Criar evento"
        component={Event}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: 'Cadastrar evento',
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
