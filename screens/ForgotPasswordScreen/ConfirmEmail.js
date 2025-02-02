import { View, Text, TextInput, StyleSheet, TouchableOpacity, 
KeyboardAvoidingView, Platform, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import {useState, useEffect} from 'react'
import {Octicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import api from '../../api/api'

export default function ForgotPasswordScreen() {

    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const EMAIL_URL = '/emails'


  
    function findMatch(array, valueToCompare) {
        return array.includes(valueToCompare);
    }

    const handleEmailConfirmation = async () => {
        if (!email) {
          alert('Digite o e-mail!')
          return
        }
        try {
        const response = await api.get(EMAIL_URL,{
            headers: { "Content-Type": "application/json" },
        })
        const userData = JSON.stringify(response.data.emails);
        //console.log(userData)
        if(findMatch(userData,email) == true){
            navigation.navigate('PasswordChange', { userEmail: email })  // Pass email as parameter
        }else{
            alert('Usuário não cadastrado')
        }
        console.log(findMatch(userData,email))
         //navigation.navigate('PasswordChange')


        } catch (error) {
         alert(error)
        }
    }

     // ou usa onPress=handleEmailConfirmation na linha 79 se quiser usar a função de cima

    return(
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.container}>

                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.ReturnButton}>
                            <Octicons
                                name={"arrow-left"}
                                size={30}
                                color="#000"
                            />
                        </TouchableOpacity>

                        <View style={styles.titleBox}>
                            <Text style={{fontSize: 26}}>Confirme o email de cadastro</Text>
                        </View>

                        <View style={styles.textBox}>
                            <Text style={{fontSize: 16}}>Coloque o seu email de cadastro</Text>
                            <Text style={{fontSize: 16}}>para alterarmos a senha</Text>
                        </View>

                        <View style={styles.boxInput}>
                            <TextInput 
                                style={styles.Input}
                                placeholder="abc@email.com"
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                            />
                            <Octicons
                                name={"mail"}
                                size={18}
                                color="#747688"
                                paddingRight = "2"
                            />
                        </View>

                        <View style={styles.buttonPosition}  resizeMode='contain'>
                            <TouchableOpacity style={styles.button} onPress={() => handleEmailConfirmation()}>
                                <Text style={styles.buttonText}> ENVIAR </Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', 
        justifyContent: 'center',
        alignItems: "center",
        padding: 25,
        paddingBottom: 380,
    },
    ReturnButton:{
        alignSelf: "flex-start",
        marginTop: -65,
        marginBottom: 15,
        width: 30,
        paddingRight: 5,
    },
    titleBox:{
        //backgroundColor: "red",
        width: "119%",
        paddingLeft: 30,
    }, 
    textBox:{
        //backgroundColor: "red",
        alignSelf:"flex-start",
        marginTop: 10,
    },
    boxInput:{
        backgroundColor: "#F2F2F2", //#F2F2F2 cinza claro
        width: "100%", //332
        height: 55,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 18,
        marginTop: 30,
        flexDirection: "row-reverse",
        paddingHorizontal: 10,
    },   
    Input:{
        flex: 1,
        height: "100%",
        fontSize: 14,
        paddingHorizontal: 8,
        backgroundColor: "#F2F2F2",
        borderRadius: 18,
    },
    buttonPosition:{
        alignItems: "center",
        marginTop: 30,
    },  
    button:{
        backgroundColor: "#FFD545", //#FFD545 amarelo
        width: 270, 
        height: 60, 
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 18,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    buttonText:{
        fontSize: 16,
        color: "#FFF",
        fontWeight: "bold",
    },
})