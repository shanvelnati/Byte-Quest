import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, SafeAreaView, ScrollView, Pressable, Button, Alert } from 'react-native';

const StackItem = ({ item }) => (
    <View style={styles.stackItem}>
        <Text>{item.value}</Text>
    </View>
);

const StackScreen = () => {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState('');

    const pushItem = (text) => {
        if (text !== "") {
            const newItem = {
                id: items.length + 1,
                value: text
            };
            setItems([...items, newItem])
            setItem('');
            console.log(items);
        } 
    };

    const popItem = () => {
        if (items.length > 0) {
            const newItems = [...items];
            newItems.pop();
            setItems(newItems);
        }
        console.log(items)
    };

    const clearList = () => {
        setItems([]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome to your Interactive Stack!</Text>
            <Text style={styles.subtitle}>Top of the Stack</Text>
            <FlatList
                style = {styles.stack}
                data = {[...items].reverse()}
                renderItem = {({ item }) => (
                    <StackItem item={item}/>
                )}
                keyExtractor={(item) => item.id}
            />
            <Text style={styles.subtitle}>Bottom of the Stack</Text>
            <TextInput style = {styles.input} placeholder='Data for stack here!' onChangeText={(textVal) => {setItem(textVal)}}/>
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, {backgroundColor: "lightgreen"}]} onPress={() => pushItem(item)}>
                    <Text style={styles.buttonText}>Push</Text>
                </Pressable>
                <Pressable style={[styles.button, {backgroundColor: "lightcoral"}]} onPress={() => popItem()}>
                    <Text style={styles.buttonText}>Pop</Text>
                </Pressable>
                <Pressable style={[styles.button, {backgroundColor: "khaki"}]} onPress={() => clearList()}>
                    <Text style={styles.buttonText}>Clear</Text>
                </Pressable>
            </View>
            <View style={styles.footer}></View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aliceblue',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontStyle: 'normal',
        padding: 15
    },
    subtitle: {
        fontSize: 14,
        fontStyle: 'italic',
        padding: 7
    },
    stack: {
        width: 225,
        flexDirection: 'column-reverse',
        backgroundColor: 'powderblue',
        paddingVertical: 15,
        paddingHorizontal: 6,
        borderRadius: 5,
        borderWidth: 1
    },
    stackItem: {
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        margin: 1,
        backgroundColor: 'white'
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        width: 300,
        backgroundColor: 'white'
    },
    buttonContainer: {
        padding: 15,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        alignItems: 'center',
        height: 50,
        width: 75,
        borderRadius: 7
    },
    buttonText: {
        padding: 15
    },
    footer: {
        height: 115
    }
});

export default StackScreen;


