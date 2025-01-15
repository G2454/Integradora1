import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function App() {
  return (
    <View style = {styles.container}>
      <Image
       source={require("./src/assets/UTFPReventos.png")}  
       style={styles.logo}    
      />

      <Text style={styles.title}> Login </Text>

      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> ENTRAR </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 400,
  },
  title: {
    fontSize: 24,
    marginTop: -200,
  },
  button: {
    backgroundColor: "#FFD545",
    width: 200,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFF",
  }
})