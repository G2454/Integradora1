import { View, Text, StyleSheet, FlatList, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, TouchableOpacity, Modal, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/api';

export default function HomeScreen() {
    const navigation = useNavigation();
    const EVENTS_URL = '/events';
    
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const fetchEvents = async () => {
        try {
            const response = await api.get(EVENTS_URL, {
                headers: { "Content-Type": "application/json" },
            });
            const EventsData = JSON.stringify(response.data);
            await AsyncStorage.setItem('EventDetails', EventsData);
            console.log("Fetched Events:", response.data);
            setEvents(response.data);
        } catch (e) {
            console.error("Error fetching events:", e);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            fetchEvents();
        }, 1000);
    }, []);

    const openModal = (event) => {
        setSelectedEvent(event);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedEvent(null);
    };

    const Item = ({ event }) => (
        <TouchableOpacity onPress={() => openModal(event)}>
            <View style={styles.item}>
                <Text>{event.date} - {event.time}</Text>
                <Text style={styles.title}>{event.name}</Text>
                <Text>{event.place}</Text>
            </View>
        </TouchableOpacity>
    );


    const getImageByNumber = (imageNumber) => {
        const images = {
            1: require('../../src/assets/bigbg1.png'),
            2: require('../../src/assets/bigbg2.png'),
            3: require('../../src/assets/bigbg3.png'),
            4: require('../../src/assets/bigbg4.png'),
            5: require('../../src/assets/bigbg5.png'),
            6: require('../../src/assets/bigbg6.png'),
            7: require('../../src/assets/bigbg7.png'),
            8: require('../../src/assets/bigbg8.png'),
            9: require('../../src/assets/bigbg9.png'),
            10: require('../../src/assets/bigbg10.png'),
        };
    
        return images[imageNumber] || images[1]; // Return null if no valid number is found
    };
    
    
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <View style={styles.container}>
                    <FlatList
                        data={events}
                        renderItem={({ item }) => <Item event={item} />}
                        keyExtractor={(item) => String(item.id)}
                        style={styles.flatlist}
                        scrollEnabled
                    />
                </View>
            </KeyboardAvoidingView>
            
            <Modal visible={modalVisible} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {selectedEvent && (
                            <>
                                <Image source={getImageByNumber(selectedEvent.image)} style={{width:'110%', height: 180}}/>
                                <View style={{top:30}}>
                                    <Text style={styles.modalTitle}>{selectedEvent.name}</Text>
                                    <Text style={{fontSize:18, marginBottom:10, fontWeight:'italic'}}>{selectedEvent.date} - {selectedEvent.time}</Text>
                                    <Text style={{fontSize:18, marginBottom:10, fontWeight:'italic'}} >{selectedEvent.place}</Text>
                                    <Text style={{fontSize:20, marginBottom:20, marginTop:60}}>Sobre o evento:</Text>
                                    <Text>{selectedEvent.description}</Text>
                                    <View style={{top:60}}>
                                    <TouchableOpacity style={[styles.closeButton, {backgroundColor:'#DAAE19'}]} onPress={closeModal}>
                                        <Text style={styles.closeButtonText}>Favoritar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.closeButton,{backgroundColor:'#CF3030'}]} onPress={closeModal}>
                                        <Text style={styles.closeButtonText}>Voltar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.closeButton,{backgroundColor:'#30CF82'}]} onPress={closeModal}>
                                        <Text style={styles.closeButtonText}>Editar</Text>
                                    </TouchableOpacity>
                                    </View>
                                </View>
                            </>
                            
                        )}
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
    },
    flatlist: {
        width: '100%',
    },
    item: {
        backgroundColor: '#A3BBAD',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#357266',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '100%',
        height:'100%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 30,
        fontWeight: 'italic',
        marginBottom: 10,

    },
    closeButton: {
        marginTop: 40,
        backgroundColor: '#357266',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    image: {
        width: '100%',
        height: 'auto',
        margin:10
    }
});
