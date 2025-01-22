import './gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './Routes/IndexRoutes'

export default function App() {
  return (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
  )
}