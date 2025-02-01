import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native'
import {useState} from 'react'
import {Octicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false); // Estado para alternar visibilidade da senha

  /*const handleLogin = async () => {
    if (!email || !password) {
      alert('Preencha todos os campos!');
      return;
    }
  
    try {
      const userData = await AsyncStorage.getItem(email);
  
      if (userData) {
        const user = JSON.parse(userData);
  
        if (user.password === password) {
          alert(`Bem-vindo(a), ${user.name}!`);
          navigation.navigate('Home'); // Navega para a tela inicial do app
        } else {
          alert('Senha incorreta!');
        }
      } else {
        alert('E-mail não registrado!');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Tente novamente.');
    }
  }*/

    // ou usa onPress=handleLogin na linha 93 se quiser usar a função de cima

  return (
    <View style = {styles.container}>
      <View style = {styles.logo}>
        <Image
        source={require("../../src/assets/UTFPReventos.png")}
        resizeMode='contain'     
        />
      </View>
      
      <View style={styles.textTitle}>
        <Text style={{fontSize: 24}}> Login </Text>
      </View>
 
      <View style={styles.boxInput}>
        <TextInput 
          style={styles.Input}
          placeholder="abc@email.com"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Image
          source={require("../../src/assets/email.png")}
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

        <Image
          source={require("../../src/assets/Password.png")}
        />
      </View>
      <TouchableOpacity style={styles.BoxPassword} onPress={() => navigation.navigate('ConfirmEmail')}>
        <Text style={styles.TextPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <View style={styles.buttonPosition}  resizeMode='contain'>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomePage')}> 
          <Text style={styles.buttonText}> ENTRAR </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.TextBottom}>Não tem conta? {''}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}> 
          <Text style={styles.TextBottomCreate}>Crie agora!</Text>
        </TouchableOpacity>      
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF", //branco
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
  iconEyeButton: {
    position: "absolute",
    right: 10,
    paddingRight: 10,
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
  buttonPosition: {
    alignItems: "center",
    marginTop: 30,
  },
  Input: {
    height: "100%",
    width: "90%",
    paddingHorizontal: 8,
    backgroundColor: "#F2F2F2",
    borderRadius: 18,
  },
  boxInput: {
    backgroundColor: "#F2F2F2", //#F2F2F2 cinza claro
    width: 332,
    height: 55,
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 18,
    marginTop: 10,
    flexDirection: "row-reverse",
  },
  TextPassword: {
    color: "#0000FF",
    marginTop: 10,
    paddingRight: 5,
  },
  BoxPassword: {
    //backgroundColor: "red",
    width: "40%",
    height: "5%",
    justifyContent: "flex-end",
    marginTop: 5,
    flexDirection: "row",
    marginLeft: 200,
  },
  TextBottom: {
    marginTop: 180,
  },
  TextBottomCreate: {
    color: "#0000FF",
    fontWeight: "bold",
    marginBottom: "-4.5",
  },
})