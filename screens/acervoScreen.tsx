import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import CustomModal from '../components/customModal';

const Acervo = () => {
    const navigation = useNavigation();
    const route = useRoute

    const [modalVisible, setModalVisible] = useState(false);
    const [user, setUser] = useState<{ firstName: string, lastName: string, email: string } | null>(null);

    const handleAddBook = () => {
        navigation.navigate('Coleções');
    };

    const handleSettings = () => {
        navigation.navigate('UserEdition');
        setModalVisible(false);
    };

    const handleLogout = async () => {
        try {
            await AsyncStorage.clear();
            navigation.navigate('Login');
        } catch (error) {
            console.log('Error during logout:', error)
        }
    }

    useEffect(() => {
        const fetchUser = async () => {
            const email = route.params?.email;
            if (email) {
                const storedUser = await AsyncStorage.getItem(email);
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            }
        };
        fetchUser();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    <Image
                        source={require("../assets/images/images-project/bibliotech.png")}
                        style={styles.logo}
                    />
                    <Text style={styles.pageTitle}>Bibliotech</Text>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.iconButton}>
                    <Ionicons name="person-circle-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <Image
                source={require('../assets/images/images-project/books.jpg')}
                style={styles.image}
            />
            <Text style={styles.message}>Adicione um livro à sua coleção!</Text>
            <TouchableOpacity style={styles.button} onPress={handleAddBook}>
                <Text style={styles.buttonText}>Criar novo livro</Text>
            </TouchableOpacity>

            <CustomModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                user={user}
                handleSettings={handleSettings}
                handleLogout={handleLogout}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#be7abb",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 60,
        marginTop: -120
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 45,
        height: 45,
        marginRight: 10,
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
    },
    iconButton: {
        padding: 10,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    message: {
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#ac58aa",
        padding: 15,
        borderRadius: 10,
        width: 200,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalButton: {
        width: '75%',
        padding: 10,
        backgroundColor: '#ac58aa',
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 5,
    },
    closeButton: {
        marginTop: 10,
    },
    closeButtonText: {
        color: '#ac58aa',
        fontSize: 16,
    },
});

export default Acervo;
