import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { getAuth, signOut } from 'firebase/auth';
import { Button } from 'react-native-elements';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../Config/firebase';

const auth = getAuth();

const ProfileScreen = () => {
  const { user } = useAuth();
  const [streak, setStreak] = useState(0);

  const fetchStreak = async () => {
    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      const userData = userDoc.data();
      setStreak(userData.streak || 0);
    }
  };

  const updateStreak = async () => {
    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const lastVisit = userData.lastVisit ? userData.lastVisit.toDate() : null;
      const currentDate = new Date();
      if (!lastVisit || (currentDate - lastVisit) / (1000 * 60 * 60 * 24) >= 1) {
        await setDoc(userRef, {
          lastVisit: serverTimestamp(),
          streak: (userData.streak || 0) + 1,
        }, { merge: true });
        setStreak((prevStreak) => prevStreak + 1);
      }
    } else {
      await setDoc(userRef, {
        lastVisit: serverTimestamp(),
        streak: 1,
      });
      setStreak(1);
    }
  };

  useEffect(() => {
    fetchStreak();
    updateStreak();
  }, []);

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
      <Text style={styles.streak}>Streak: {streak} days</Text>
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
    marginBottom: 10,
  },
  streak: {
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