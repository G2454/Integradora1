import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import {Octicons} from '@expo/vector-icons'

/* Lembrar de passar a tela de registro pra de baixo da de login no app,js */

export default function RegisterScreen() {
  return(
    <View style={StyleSheet.container}>

      <View style={StyleSheet.TextRegister}>
        <Text styles={{fontSize: 24}}>Registro</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  TextRegister: {
    alignSelf: "flex-start",
    marginTop: -65,
    marginBottom: 20,
  },

})