import './gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './screens/LoginScreen/Login'
import RegisterScreen from './screens/RegisterScreen/Register'
import routes from './routes/index.routes'
 

export default function App() {
  return (
    <NavigationContainer>
        <routes />
    </NavigationContainer>
  )
}