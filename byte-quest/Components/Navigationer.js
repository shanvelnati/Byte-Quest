import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from '../Screens/ExploreScreen.js';
import { Text } from 'react-native'; 
import StackScreen from '../Screens/ActiveStack.js'

const Tab = createBottomTabNavigator();

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
        name="My Course"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'My Course',
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