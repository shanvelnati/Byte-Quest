import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {CourseCard, styles} from './ExploreScreen';
import StackPic from '../assets/StackPic.png';
import QueuePic from '../assets/QueuePic.png';
import LinkedListPic from '../assets/LinkedListPic.png';

const courses = [
  { id: '1', name: 'Stacks', image: StackPic},
  {id: '2', name: "Queues", image: QueuePic},
  {id: '3', name: "Linked Lists", image: LinkedListPic }
  // Add more courses as needed
];

const HomeScreen = () => { 
  const navigation = useNavigation();

  const handleCoursePress = (course) => {
    if (course.name === 'Stacks') {
      navigation.navigate('Stacks');
    } else if (course.name === 'Queues') {
      navigation.navigate('Queues');
    } else {
      console.log(`Navigating to course: ${course.name}`);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <CourseCard course={item} onPress={() => handleCoursePress(item)} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default HomeScreen;