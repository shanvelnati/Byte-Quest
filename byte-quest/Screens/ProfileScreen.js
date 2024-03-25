import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { getAuth, signOut } from 'firebase/auth';
import { Button } from 'react-native-elements';

const auth = getAuth();

const ProfileScreen = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.email}>Welcome, {user.email}!</Text>
      {/* Add more profile information */}
      <Button
        title="Logout"
        onPress={handleLogout}
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  email: {
    fontSize: 18,
    marginBottom: 40,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#007AFF',
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;