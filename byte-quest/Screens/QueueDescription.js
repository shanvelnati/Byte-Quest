import React, { usestate } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const QueueDescription = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Queues</Text>
            <Text style={styles.paragraph}>Queues are a very simple and easy to use data structure in computer science. Queues follow a First In, First Out (also known as FIFO) structure. This means the oldest added element to a queue will be removed first. Picture being in line to grab coffee. The person at the front of the line was the first one there and therefore they will be the first out! Here is a list of functions Queues have and what each function does.</Text>
            <View style={styles.functions}>
                <Text style={styles.listHeader}>Functions:</Text>
                <Text style={styles.listElement}>Enqueue:
                    <Text style={styles.elementDesc}> Adds an element to the rear of the queue</Text>
                </Text>
                <Text style={styles.listElement}>Dequeue:
                    <Text style={styles.elementDesc}> Removes the element from the front of the queue</Text>
                </Text>
                <Text style={styles.listElement}>Peek or Front:
                    <Text style={styles.elementDesc}> Tells user what is at the front of the queue but doesn't remove it</Text>
                </Text>
                <Text style={styles.listElement}>Rear:
                    <Text style={styles.elementDesc}> Tells user what is at the back of the queue but doesn't remove it</Text>
                </Text>
                <Text style={styles.listElement}>Size:
                    <Text style={styles.elementDesc}> Tells the user how many elements are in the queue</Text>
                </Text>
            </View>
            <Text style={styles.paragraph}>With this basic understanding of how Queues work, use the button to continue to your own interactive Queue!</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate("PlayQueue")}>
                <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
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
        fontSize: 26,
        fontStyle: 'normal',
        padding: 20,
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    paragraph: {
        textAlign: 'left',
        fontSize: 16,
        width: 325,
        letterSpacing: 0.55
    },
    functions: {
        width: 325,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    listHeader: {
        textAlign: 'left',
        fontSize: 16,
        width: 325,
        letterSpacing: .55,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    listElement: {
        fontSize: 15,
        width: 300,
        textAlign: 'left',
        paddingTop: 7,
        letterSpacing: .55,
        fontWeight: '600'
    },
    elementDesc: {
        fontStyle: 'italic',
        fontWeight: '300'
    },
    button: {
        marginTop: 10,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        height: 50,
        width: 100,
        borderRadius: 7
    },
    buttonText: {
        padding: 15
    }
});

export default QueueDescription;