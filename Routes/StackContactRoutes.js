import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Contact from '../screens/ContactScreen/Contact';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function StackContactRoutes() {
  return (
    <Stack.Navigator>
      {/* Tela de Contato */}
      <Stack.Screen
        name="Contato"
        component={Contact}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: 'Contato',
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

