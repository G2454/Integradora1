import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen/Login'
import RegisterScreen from '../screens/RegisterScreen/Register'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ConfirmEmail' 
import PasswordChangeScreen from '../screens/PasswordChangeScreen/PasswordChange'
import HomeScreen from '../screens/HomeScreen/HomePage'

export default function Routes() {
  const Stack = createStackNavigator()

  return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen}/> 
            <Stack.Screen name="Register" component={RegisterScreen}/> 
            <Stack.Screen name="ConfirmEmail" component={ForgotPasswordScreen}/>
            <Stack.Screen name="PasswordChange" component={PasswordChangeScreen}/>
            <Stack.Screen name="HomePage" component={HomeScreen}/> 
        </Stack.Navigator>
  )
}