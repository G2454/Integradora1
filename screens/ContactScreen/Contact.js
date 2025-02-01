import { View, Text, StyleSheet, Image } from 'react-native';

export default function Contact() {
    return (
        <View style={styles.container}>
            {/* Logo centralizada */}
            <View style={styles.logo}>
                <Image
                    source={require("../../src/assets/UTFPReventos.png")}
                    resizeMode="contain"
                />
            </View>

            {/* Título alinhado à esquerda */}
            <Text style={styles.textTitle}>Informações de contato</Text>

            {/* Informações de contato */}
            <View style={styles.textContainer}>
                <Text style={styles.text}>email: appeventos@gmail.com</Text>
                <Text style={styles.text}>whats: (43) 9999-2731</Text>
            </View>

            {/* Mensagem final */}
            <View style={styles.messageContainer}>
                <Text style={styles.text}>Eventuais dúvidas ou sugestões podem</Text>
                <Text style={styles.text}>ser enviadas para os contatos acima.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'top',
        padding: 40,
        backgroundColor: '#FFFFFF', 
    },

    logo: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 90, 
        marginTop: 10,
    },

    textTitle: {
        fontSize: 18,
        fontWeight: 'regular',
        alignSelf: 'flex-start', 
        marginTop: 15,
        marginBottom: 10, 
        color: '#3C3E56',
    },

    textContainer: {
        alignSelf: 'flex-start', 
        marginBottom: 20, 
    },

    text: {
        fontSize: 16,
        color: '#3C3E56',
    },

    messageContainer: {
        alignSelf: 'flex-start', 
    },
});
