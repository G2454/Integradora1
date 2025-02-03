import { View, Text, StyleSheet, FlatList, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, image, TouchableOpacity } from 'react-native';
import {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/api'

export default function HomeScreen() {
    const navigation = useNavigation();
    const EVENTS_URL = '/events'
  

    const [events, setEvents] = useState([])


    const fetchEvents = async () => {
        try {
            const response = await api.get(EVENTS_URL, {
                headers: { "Content-Type": "application/json" },
            });
            console.log("Fetched Events:", response.data);
            setEvents(response.data); // Save the response data in state
        } catch (e) {
            console.error("Error fetching events:", e);
        }
    };

    useEffect(() => {
        setTimeout(()=>{
            fetchEvents(); 
           }, 1000)

        
    }, []);


    const Item = ({ title, date, place, time}) => (
        <TouchableOpacity>
        <View style={styles.item}>
            <Text>{date} - {time} </Text>
            <Text style={styles.title}>{title}</Text>
            <Text>{place}</Text>
        </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <View style={styles.container}>
                    <FlatList
                        data={events}
                        renderItem={({ item }) => <Item title={item.name} date={item.date} place={item.place} time={item.time}/>}
                        keyExtractor={(item) => String(item.id)}
                        style={styles.flatlist}
                        scrollEnabled
                        
                    />
                </View>
            </KeyboardAvoidingView>
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
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
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
        borderWidth:1,
        borderColor:'#357266',
    },
    title: {
        fontSize: 16,
    },
});
