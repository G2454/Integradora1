import { View, Text, TextInput, StyleSheet, TouchableOpacity, 
KeyboardAvoidingView, Platform, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import {useEffect, useState} from 'react'
import {Octicons} from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import api from '../../api/api'
    
export default function PasswordScreen() {
    
    const navigation = useNavigation()
    const route = useRoute()  // Add this line to get access to route params
    const { userEmail } = route.params  
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false) // Estado para alternar visibilidade da senha
    const [passwordVisible2, setPasswordVisible2] = useState(false)

    const handlePasswordChange = async ()=>{
        if (!password || !password2) {
            alert('Preencha ambos os campos de senha!')
            return
        }
        if (password !== password2) {
            alert('As senhas não coincidem!')
            return
        }
        try {
            // Make API request to change password
            const response = await api.put(`/change-password/${userEmail}`, {
                newPassword: password
            })
            alert('Senha alterada com sucesso!')
            navigation.navigate('Login')
        } catch (error) {
            // Handle different types of errors
            const errorMessage = error.response?.data?.error || 'Erro ao alterar a senha'
            alert(errorMessage)
        }
    }

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

                        <TouchableOpacity onPress={() => navigation.navigate('ConfirmEmail')} style={styles.ReturnButton}>
                            <Octicons
                                name={"arrow-left"}
                                size={30}
                                color="#000"
                            />
                        </TouchableOpacity>

                        <View style={styles.titleBox}>
                            <Text style={{fontSize: 26}}>Mudar a senha</Text>
                        </View>

                        <View style={styles.boxInput}>
                            <TextInput 
                                style={styles.Input}
                                placeholder="Sua senha"
                                secureTextEntry={!passwordVisible} // Se passwordVisible for false, a senha é escondida
                                onChangeText={(text) => setPassword(text)}
                                value={password}
                            />
                            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.iconEyeButton}>
                                <Octicons 
                                name={passwordVisible ? "eye" : "eye-closed"}
                                size = {18}
                                color = "#747688"
                                />
                            </TouchableOpacity> 
                            <Octicons
                                name={"lock"}
                                size={18}
                                color="#747688"
                                paddingRight = "5"
                            />
                            </View>

                            <View style={styles.boxInput}>
                            <TextInput 
                                style={styles.Input}
                                placeholder="Confirme a senha"
                                secureTextEntry={!passwordVisible2} // Se passwordVisible for false, a senha é escondida
                                onChangeText={(text) => setPassword2(text)}
                                value={password2}
                            />
                            <TouchableOpacity onPress={() => setPasswordVisible2(!passwordVisible2)} style={styles.iconEyeButton}>
                                <Octicons 
                                name={passwordVisible2 ? "eye" : "eye-closed"}
                                size = {18}
                                color = "#747688"
                                />
                            </TouchableOpacity> 
                            <Octicons
                                name={"lock"}
                                size={18}
                                color="#747688"
                                paddingRight = "5"
                            />
                        </View>

                        <View style={styles.buttonPosition}  resizeMode='contain'>
                            <TouchableOpacity style={styles.button} onPress={() => handlePasswordChange()}>
                                <Text style={styles.buttonText}> ALTERAR A SENHA </Text>
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
        paddingBottom: 260,
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
       width: "115%",
       paddingLeft: 30,
       marginBottom: 90,
    },
    boxInput:{
        backgroundColor: "#F2F2F2", //#F2F2F2 cinza claro
        width: "100%", //332
        height: 55,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 18,
        marginTop: 20,
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
    iconEyeButton:{
        position: "absolute",
        right: 10,
        paddingRight: 10,
    },
    buttonPosition:{
        alignItems: "center",
        marginTop: 50,
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
    