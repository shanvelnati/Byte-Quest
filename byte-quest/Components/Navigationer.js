import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ExploreScreen from '../Screens/ExploreScreen.js';
import { Text } from 'react-native'; 
import StackScreen from '../Screens/ActiveStack.js'
import HomeScreen from '../Screens/HomeScreen.js';
import ProfileScreen from '../Screens/ProfileScreen.js';


import AuthStack from '../Screens/AuthStack';
import { useAuth } from '../hooks/useAuth';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Courses" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Stacks" component={StackScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const Navigationer = () => {

  const { user } = useAuth();
  return user ? (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#bbb',
          position: 'absolute',
          bottom: 0,
          left: 0, 
          right: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: () => (
            <Text style={{ fontSize: 20, marginBottom: -3 }}>🔍</Text>
          ),
        }}
      />
      <Tab.Screen
        name="My Courses"
        component={HomeStack}
        options={{
          tabBarLabel: 'My Courses',
          tabBarIcon: () => (
            <Text style={{ fontSize: 20, marginBottom: -3 }}>📚</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <Text style={{ fontSize: 20, marginBottom: -3 }}>👤</Text>,
        }}
      />
    </Tab.Navigator> ) : (
    <AuthStack />
  );
};

export default Navigationer;