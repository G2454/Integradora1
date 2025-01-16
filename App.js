import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native'
import {Octicons} from '@expo/vector-icons'

export default function App() {
  return (
    <View style = {styles.container}>
      <View style = {styles.logo}>
      <Image
       source={require("./src/assets/UTFPReventos.png")}
       resizeMode='contain'     
      />
    </View>
      
    <View style={styles.textTitle}>
      <Text style={{fontSize: 24}}> Login </Text>
    </View>

    <View style={styles.boxInput}>
      <TextInput style={styles.Input}>
        <Text style={{color: 747688}}> abc@email.com </Text>
      </TextInput>
      <Image
        source={require("./src/assets/email.png")}
      />
    </View>

    <View style={styles.boxInput}>
      <TextInput style={styles.Input}>
        <Text style={{color: 747688}}> Sua senha </Text>
      </TextInput>
      <Octicons style={styles.EyeClosed}
        name="eye-closed"
        size={18}
      />
      <Image
        source={require("./src/assets/Password.png")}
      />
    </View>

    <Text style={styles.TextPassword}>Esqueceu a senha?</Text>

    <View style={styles.buttonPosition}  resizeMode='contain'>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> ENTRAR </Text>
      </TouchableOpacity>
    </View>

      <Text style={styles.TextBottom}>Não tem conta?  
        <Text style={styles.TextBottomCreate}> Crie agora!</Text>      
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 25,
    //justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
    marginTop: 100,
  },
  textTitle: {
    alignSelf: "flex-start",
    marginTop: -65,
    marginBottom: 20,
  },
  EyeClosed: {
    position: "absolute",
    right: 10,
    color: "#747688",
    paddingRight: 10,
  },
  button: {
    backgroundColor: "#FFD545", //#FFD545
    width: 200,
    height: 55,
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
  buttonPosition: {
    alignItems: "center",
    marginTop: 30,
  },
  Input: {
    height: "100%",
    width: "90%",
    padding: 8,
    backgroundColor: "#F2F2F2",
    borderRadius: 18,
  },
  boxInput: {
    backgroundColor: "#F2F2F2", //#F2F2F2
    width: 332,
    height: 55,
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 18,
    marginTop: 10,
    flexDirection: "row-reverse",
  },
  TextPassword: {
    marginTop: 15,
    alignSelf: "flex-end",
    paddingRight: 10,
  },
  TextBottom: {
    marginTop: 200,
  },
  /*TextBottomCreate: {
    color: "",
  },*/
})