import { View, Text, TextInput, StyleSheet, TouchableOpacity, 
KeyboardAvoidingView, Platform, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import {useState} from 'react'
import {Octicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function RegisterScreen() {

  const navigation = useNavigation();
  const [name,setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false) // Estado para alternar visibilidade da senha
  const [passwordVisible2, setPasswordVisible2] = useState(false)

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
                size={25}
                color="#000"
              />
            </TouchableOpacity>

            <View style={styles.RegisterBox}>
              <Text style={{fontSize: 24, fontWeight:"bold"}}>Registrar</Text>
            </View>

            <View style={styles.boxInput}>
              <TextInput 
                style={styles.Input}
                placeholder="Nome completo"
                onChangeText={(text) => setName(text)}
                value={name}
              />
              <Octicons
                name={"person"}
                size = {18}
                color = "#747688"
                paddingRight = "3"
              />
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
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> CRIAR CONTA </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.OUbox}>
              <Text style={{fontSize:16, color:"#9D9898" /*cinza claro*/}}>OU</Text>
            </View>

            <Text style={styles.TextBottom}>Ja possui uma conta? {''}
              <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
                <Text style={styles.TextBottomLogin}>Faça o login</Text>
              </TouchableOpacity>      
            </Text>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    paddingBottom: 70,
  },
  ReturnButton: {
    alignSelf: "flex-start",
    marginTop: -65,
    marginBottom: 15,
    width: 30,
    paddingRight: 15,
  },
  RegisterBox: {
    //backgroundColor: "red",
    alignSelf: "flex-start",
    paddingLeft: 6.5,
    marginBottom: 8,
  },
  boxInput: {
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
  Input: {
    flex: 1,
    height: "100%",
    fontSize: 14,
    paddingHorizontal: 8,
    backgroundColor: "#F2F2F2",
    borderRadius: 18,
  },
  iconEyeButton: {
    position: "absolute",
    right: 10,
    paddingRight: 10,
  },
  buttonPosition: {
    alignItems: "center",
    marginTop: 30,
  },
  button: {
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
  buttonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
  OUbox:{
    alignItems: "center",
    marginTop: 50,

  },
  TextBottom: {
    marginTop: 30,
    fontSize: 15,
  },
  TextBottomLogin: {
    color: "#0000FF",
    marginBottom: "-4.5",
    fontSize: 15,
  },


})