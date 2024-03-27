import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ExploreScreen from '../Screens/ExploreScreen.js';
import { Text } from 'react-native'; 
import StackDesc from '../Screens/StackDescription.js';
import StackScreen from '../Screens/ActiveStack.js';
import HomeScreen from '../Screens/HomeScreen.js';
import QueueDesc from '../Screens/QueueDescription.js';
import QueueScreen from '../Screens/ActiveQueue.js';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Courses" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Stacks" component={StackDesc} options={{ headerShown: false }} />
      <Stack.Screen name="PlayStack" component={StackScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Queues" component={QueueDesc} options={{ headerShown: false }} />
      <Stack.Screen name="PlayQueue" component={QueueScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

const Navigationer = () => {
  return (
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
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Text style={{ fontSize: 20, marginBottom: -3 }}>👤</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigationer;