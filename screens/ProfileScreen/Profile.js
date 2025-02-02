import React from 'react';
import {useEffect, useState} from 'react'

import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {
    const [userData, setUserData] = useState([])


    const getUserData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('UserDetails')
        //console.log('Retrieved value:', jsonValue) // For debugging
        const parsedValue = jsonValue != null ? JSON.parse(jsonValue) : null
        //console.log('Parsed value:', parsedValue) // For debugging
        return parsedValue
      } catch(e) {
        console.error('Error reading data from storage:', e)
        return null
      }
    }
  
    useEffect(() => {
      getUserData().then(data => {
        //console.log('Setting userData to:', data) // For debugging
        setUserData(data)
        console.log(data)
      })
    }, [])
    return (
        <SafeAreaView style={styles.container}>

            {/* Imagem acima do nome */}
            <Image 
                source={require('../../src/assets/menuphoto.png')} // Substitua pelo caminho correto da imagem
                style={styles.profileImage}
                resizeMode="contain"
            />

            <View>
                <Text style={styles.username}>{userData[1]}</Text>
            </View>

            {/* Email e senha com alinhamento à esquerda */}
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    email: <Text style={styles.underlineText}>{userData[2]}</Text>
                </Text>
                <Text style={styles.infoText}>
                    senha: <Text>{userData[3]}</Text>
                </Text>
            </View>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#FFD545',
        borderWidth: 2,
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 40, // Adiciona mais espaço abaixo do botão
    },

    icon: {
        marginRight: 10,
    },

    buttonText: {
        color: 'orange',
        fontSize: 16,
        fontWeight: 'regular',
    },

    profileImage: {
        width: 113,
        height: 113,
        marginTop: 10, // Distância entre a imagem e o topo
        marginBottom: 20, // Espaço entre a imagem e o email/senha
    },

    infoContainer: {
        alignItems: 'flex-start', // Mudado para alinhar à esquerda
        marginBottom: 60, // Espaço entre email/senha e botão de editar
    },

    infoText: {
        fontSize: 16,
        color: 'black',
        marginBottom: 25, // Mantém os itens mais próximos entre si
    },

    underlineText: {
        textDecorationLine: 'underline',
        color: 'black',
    },

    username: {
        fontSize: 24,
        fontWeight: 'regular',
        color: 'black',
        marginBottom: 50, // Distância entre o nome e a imagem
        marginTop: 0, // Distância entre o nome e o topo
    }
});
