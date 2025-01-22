import { View, Text, TextInput, StyleSheet, TouchableOpacity, 
KeyboardAvoidingView, Platform, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import {useState} from 'react'
import {Octicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
    
export default function HomeScreen() {

    const navigation = useNavigation()
    
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

                        <Text> olá mundo </Text>

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
})