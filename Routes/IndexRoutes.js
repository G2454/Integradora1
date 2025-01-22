import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen/Login'
import RegisterScreen from '../screens/RegisterScreen/Register'
import PasswordScreen from '../screens/PasswordScreen/ConfirmEmail'

export default function Routes() {
  const Stack = createStackNavigator()

  return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen}/> 
            <Stack.Screen name="Register" component={RegisterScreen}/> 
            <Stack.Screen name="ConfirmEmail" component={PasswordScreen}/>
        </Stack.Navigator>
  )
}