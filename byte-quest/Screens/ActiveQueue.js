import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, SafeAreaView, ScrollView, Pressable, Button, Alert } from 'react-native';

const QueueItem = ({ item }) => (
    <View style={styles.queueItem}>
        <Text>{item.value}</Text>
    </View>
);

const QueueScreen = () => {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState('');

    const enqueueItem = (text) => {
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

    const dequeueItem = () => {
        if (items.length > 0) {
            const newItems = [...items];
            newItems.shift();
            setItems(newItems);
        }
        console.log(items)
    };

    const clearList = () => {
        setItems([]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome to your Interactive Queue!</Text>
            <Text style={styles.subtitle}>Front of the Queue is on the Left</Text>
            <FlatList
                horizontal = {true}
                style = {styles.queue}
                data = {[...items]}
                renderItem = {({ item }) => (
                    <QueueItem item={item}/>
                )}
                keyExtractor={(item) => item.id}
            />
            <Text style={[styles.subtitle, {textAlign: 'right'}]}>Back of the Queue is on the Right</Text>
            <TextInput style = {styles.input} placeholder='Data for stack here!' onChangeText={(textVal) => {setItem(textVal)}}/>
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, {backgroundColor: "lightgreen"}]} onPress={() => enqueueItem(item)}>
                    <Text style={styles.buttonText}>Enqueue</Text>
                </Pressable>
                <Pressable style={[styles.button, {backgroundColor: "lightcoral"}]} onPress={() => dequeueItem()}>
                    <Text style={styles.buttonText}>Dequeue</Text>
                </Pressable>
                <Pressable style={[styles.button, {backgroundColor: "khaki"}]} onPress={() => clearList()}>
                    <Text style={styles.buttonText}>Clear</Text>
                </Pressable>
            </View>
            <View style={styles.footer}></View>
        </SafeAreaView>
    );
};
const VerticalText = props => {
    <View style={{ flex: 1, flexDirection: 'column' }}>
        {props.string.split('').map(char => <Text>{char}</Text>)}
    </View>
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
        padding: 15,
        flexDirection:'column'
    },
    subtitle: {
        fontSize: 14,
        fontStyle: 'italic',
        padding: 7
    },
    queue: {
        width: 350,
        flexDirection: "row",
        flexGrow: 0,
        height: 120,
        backgroundColor: 'powderblue',
        paddingVertical: 30,
        paddingHorizontal: 6,
        borderRadius: 5,
        borderWidth: 1
    },
    queueItem: {
        alignItems: 'center',
        height: 60,
        width: 80,
        textAlign: "center",
        paddingVertical: 20,
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
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        padding: 15,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        height: 50,
        width: 80,
        borderRadius: 7
    },
    buttonText: {
        paddingVertical: 15,
        textAlign: 'center'
    },
    footer: {
        height: 115
    }
});

export default QueueScreen;


