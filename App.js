import './gesture-handler';
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './Routes/Index'
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  useEffect(() => {
    async function prepare() {
      try {
        // Impede que a splash seja escondida automaticamente
        await SplashScreen.preventAutoHideAsync()

        // Simula carregamento de recursos (exemplo: 2 segundos)
        await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        // Esconde manualmente a splash screen
        await SplashScreen.hideAsync()
      }
    }

    prepare();
  }, []);


  return (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
  )
}