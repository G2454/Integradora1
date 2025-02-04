import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, TextInput, ActivityIndicator } from 'react-native';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useEffect, useState } from 'react';
import filter from 'lodash.filter';
import api from '../../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Favorite() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('UserDetails');
                const parsedValue = jsonValue ? JSON.parse(jsonValue) : null;
                setUserData(parsedValue);
            } catch (e) {
                console.error('Error reading data from storage:', e);
            }
        };

        fetchUserData();
    }, []);

    useEffect(() => {
        setTimeout(()=>{
            fetchData();
        },2000)
        
    }, []);

    const fetchData = async () => {
        try {
            const response = await api.get(`/users/${userData[0]}/favorite-events`, {
                headers: { "Content-Type": "application/json" },
            });

            if (response.status === 200) {
                setFullData(response.data.favoritedEvents);
                setData(response.data.favoritedEvents);
                setIsLoading(false);
            }
        } catch (err) {
            alert("Error fetching data");
            setIsLoading(false);
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        const formattedQuery = query.toLowerCase();
        const filteredData = fullData.filter(event =>
            event.name.toLowerCase().includes(formattedQuery)
        );
        setData(filteredData);
    };

    if (isLoading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <TextInput
                placeholder="Search"
                clearButtonMode="always"
                style={styles.searchBox}
                autoCapitalize="none"
                autoCorrect={false}
                value={searchQuery}
                onChangeText={(query) => handleSearch(query)}
            />

            <FlatList
                data={data}
                scrollEnabled
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textName}>{item.name}</Text>
                            <Text style={styles.textDetails}>{item.date} at {item.time}</Text>
                            <Text style={styles.textDetails}>Location: {item.place}</Text>
                            <Text style={styles.textDescription}>{item.description}</Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    searchBox: {
        margin: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        flexDirection: 'column',
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    textContainer: {
        marginLeft: 10,
    },
    textName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textDetails: {
        fontSize: 14,
        color: 'gray',
    },
    textDescription: {
        fontSize: 14,
        color: '#333',
        marginTop: 5,
    },
});
