import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

export default function Profile() {
    return (
        <SafeAreaView style={styles.container}>

            {/* Imagem acima do nome */}
            <Image 
                source={require('../../src/assets/menuphoto.png')} // Substitua pelo caminho correto da imagem
                style={styles.profileImage}
                resizeMode="contain"
            />

            <View>
                <Text style={styles.username}>Ashfak Sayem</Text>
            </View>

            {/* Email e senha com alinhamento à esquerda */}
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    email: <Text style={styles.underlineText}>doasjdsaiodj</Text>
                </Text>
                <Text style={styles.infoText}>
                    senha: <Text>senha</Text>
                </Text>
            </View>

            {/* Botão de editar perfil */}
            <TouchableOpacity style={styles.button}>
                <Icon name="edit" size={20} color="orange" style={styles.icon} />
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>

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
