import React, { usestate } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StackDescription = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Stacks</Text>
            <Text style={styles.paragraph}>Stacks are a very simple and easy to use data structure in computer science. Stacks follow a Last In, First Out (also known as LIFO) structure. This means the most recent element added to a stack will be the first one to be removed. Picture creating a stack of pancakes. The last pancake you put on the stack will be the first one you eat! Here is a list of various functions a Stack has and what each function does.</Text>
            <View style={styles.functions}>
                <Text style={styles.listHeader}>Functions:</Text>
                <Text style={styles.listElement}>Push:
                    <Text style={styles.elementDesc}> This adds an element onto the stack</Text>
                </Text>
                <Text style={styles.listElement}>Pop:
                    <Text style={styles.elementDesc}> This removes the element from the top of the stack and returns it to the user</Text>
                </Text>
                <Text style={styles.listElement}>Peek:
                    <Text style={styles.elementDesc}> This returns the element from the top of the stack to the user but does not remove it</Text>
                </Text>
                <Text style={styles.listElement}>Size:
                    <Text style={styles.elementDesc}> Returns the number of elements currently on the stack</Text>
                </Text>
            </View>
            <Text style={styles.paragraph}>Now that you have some understanding of how a stack works, follow the button to play around with your very own interactive stack!</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate("PlayStack")}>
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

export default StackDescription;