import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Image } from 'react-native';
import { useState } from 'react';
import bg1 from '../../src/assets/bg1.png'
import api from '../../api/api';
import { useNavigation } from '@react-navigation/native'

export default function Event() {
    const navigation = useNavigation();
    const [evento, setEvento] = useState('');
    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');
    const [local, setLocal] = useState('');
    const [descricao, setDescricao] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [imagem, setImagem] = useState('');
    const EVENT_URL = '/events'

    const selectImage1 = () => {
        setImagem(1); 
        setModalVisible(false);
    };

    const selectImage2 = () => {
        setImagem(2); // Simulating image selection
        setModalVisible(false); // Close modal after selection
    };

    const selectImage3 = () => {
        setImagem(3); // Simulating image selection
        setModalVisible(false); // Close modal after selection
    };

    const selectImage4 = () => {
        setImagem(4); // Simulating image selection
        setModalVisible(false); // Close modal after selection
    };

    const selectImage5 = () => {
        setImagem(5); // Simulating image selection
        setModalVisible(false); // Close modal after selection
    };

    const selectImage6 = () => {
        setImagem(6); // Simulating image selection
        setModalVisible(false); // Close modal after selection
    };

    const selectImage7 = () => {
        setImagem(7); // Simulating image selection
        setModalVisible(false); // Close modal after selection
    };

    const selectImage8 = () => {
        setImagem(8); // Simulating image selection
        setModalVisible(false); // Close modal after selection
    };

    const selectImage9 = () => {
        setImagem(9); // Simulating image selection
        setModalVisible(false); // Close modal after selection
    };

    const selectImage10 = () => {
        setImagem(10); // Simulating image selection
        setModalVisible(false); // Close modal after selection
    };

  const handleSubmit = async () =>{
    if(evento || data || horario || local || imagem == ""){
        alert("Preencha todos os dados!")
    }

    try{
        const response = await api.post(
            EVENT_URL,
            {
                name: evento, date: data, time: horario, place: local, image: imagem, description: descricao
            },
            {
                headers: {"Content-Type": "application/json" },
                withCredentials: true,
            }
        )

        if(response.status === 200){
            navigation.goBack()
            alert('Evento cadastrado com sucesso')
        }

    }catch(err){
        console.log(err)
        alert(err)
    }

  }

    return (
        <View style={styles.container}>
            <View style={{top:50}}>
            <TextInput style={styles.Input} placeholder="Nome do evento" onChangeText={setEvento} value={evento} />
            <TextInput style={styles.Input} placeholder="20/02/2025" onChangeText={setData} value={data} />
            <TextInput style={styles.Input} placeholder="17:30" onChangeText={setHorario} value={horario} />
            <TextInput style={styles.Input} placeholder="Sala 502" onChangeText={setLocal} value={local} />
            <TouchableOpacity style={styles.boxButton} onPress={() => setModalVisible(true)}>
                <Text>Escolher Imagem</Text>
            </TouchableOpacity>
            <TextInput style={styles.Input} placeholder="Descrição breve do evento" onChangeText={setDescricao} value={descricao} />
            <Modal visible={modalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={{fontSize:26, marginTop:40}}>Escolha uma Imagem</Text>
                        <View style={styles.imagesSelector}>
                            <TouchableOpacity onPress={selectImage1}>
                                <Image source={require('../../src/assets/bg1.png')} style={styles.image}/>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={selectImage2}>
                                <Image source={require('../../src/assets/bg2.png')} style={styles.image}/>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={selectImage3}>
                                <Image source={require('../../src/assets/bg3.png')} style={styles.image}/>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={selectImage4}>
                                <Image source={require('../../src/assets/bg4.png')} style={styles.image}/>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={selectImage5}>
                                <Image source={require('../../src/assets/bg5.png')} style={styles.image}/>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={selectImage6}>
                                <Image source={require('../../src/assets/bg6.png')} style={styles.image}/>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={selectImage7}>
                                <Image source={require('../../src/assets/bg7.png')} style={styles.image}/>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={selectImage8}>
                                <Image source={require('../../src/assets/bg8.png')} style={styles.image}/>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={selectImage9}>
                                <Image source={require('../../src/assets/bg9.png')} style={styles.image}/>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={selectImage10}>
                                <Image source={require('../../src/assets/bg10.png')} style={styles.image}/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={[styles.modalButton, {top:40}]} onPress={() => setModalVisible(false)}>
                                <Text>Cancelar</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={styles.boxButtonEnd} onPress={() => handleSubmit()}>
                <Text>Salvar</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    Input: {
        height: 50,
        width: 350,
        borderColor:'#FFD545',
        borderWidth:2,
        borderRadius: 18,
        paddingHorizontal: 10,
        marginBottom: 15,
        marginTop:20,
    },
    boxButton: {
        borderColor:'#FFD545',
        borderWidth:2,
        width: 350,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 18,
        marginBottom: 15,
        marginTop:20

    },
    boxButtonEnd: {
        backgroundColor: "#FFD545",
        width: 350,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 18,
        marginBottom: 15,
        marginTop:20

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContent: {
        width: '100%',
        height:'100%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#E2CFCF',
        borderRadius: 10,
        width: 200,
        alignItems: 'center',
    },
    imagesSelector:{
        width:'100%',
        top:30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    image: {
        width: 120,
        height: 120,
        margin:10
    }
});
