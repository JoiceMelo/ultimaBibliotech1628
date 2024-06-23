import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserEditionScreen = () => {
    const navigation = useNavigation();

    const handleUpdate = () => {
        // Lógica para atualizar usuário (simulação)
        alert('Alterações salvas com sucesso!');
    };

    const handleDiscard = () => {
        navigation.navigate('Acervo');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("../assets/images/images-project/bibliotech.png")}
                    style={styles.logo}
                />
                <Text style={styles.pageTitle}>Bibliotech</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.editText}>Editar seus dados</Text>
                <Text style={styles.edition}>Nome:</Text>
                <TextInput style={styles.input} placeholder="Nome" />
                <Text style={styles.edition}>Sobrenome:</Text>
                <TextInput style={styles.input} placeholder="Sobrenome" />
                <Text style={styles.edition}>Email:</Text>
                <TextInput style={styles.input} placeholder="Email" />
                <Text style={styles.edition}>Senha:</Text>
                <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                        <Text style={styles.buttonText}>Atualizar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleDiscard}>
                        <Text style={styles.buttonText}>Descartar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#be7abb",
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        position: 'absolute',
        top: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start', // Alinha os itens à esquerda
        width: '90%', // Ajusta a largura conforme necessidade
        paddingHorizontal: 10, // Espaçamento horizontal para margem
    },
    logo: {
        height: 45,
        width: 45,
    },
    pageTitle: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 30,
        marginLeft: 10,
    },
    content: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 20,
        width: '80%',
        maxWidth: 400,
        marginTop: 50
    },
    editText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    edition: {
        marginBottom: 5
    },
    input: {
        backgroundColor: "#f1f1f1",
        borderRadius: 8,
        height: 50,
        paddingHorizontal: 16,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        backgroundColor: "#ac58aa",
        borderRadius: 8,
        paddingVertical: 12,
        width: '48%',
        alignItems: 'center',
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});

export default UserEditionScreen;
