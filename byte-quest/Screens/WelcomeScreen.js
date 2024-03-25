import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Byte Quest</Text>
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('Login')}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Signup')}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;