import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ExploreScreen from './ExploreScreen';
import StackPic from '/Users/sb4sp/Desktop/Spring 24/CS 4261:8803/Byte-Quest/byte-quest/StackPic.png';
import QueuePic from '/Users/sb4sp/Desktop/Spring 24/CS 4261:8803/Byte-Quest/byte-quest/QueuePic.png';
import LinkedListPic from '/Users/sb4sp/Desktop/Spring 24/CS 4261:8803/Byte-Quest/byte-quest/LinkedListPic.png';

const courses = [
  { id: '1', name: 'Stacks', image: StackPic},
  {id: '2', name: "Queues", image: QueuePic},
  {id: '3', name: "Linked Lists", image: LinkedListPic }
  // Add more courses as needed
];

const CourseCard = ({ course, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={course.image} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{course.name}</Text>
      <Text style={styles.cardArrow}>&#8250;</Text>
    </View>
  </TouchableOpacity>
);

const HomeScreen = () => {
  const handleCoursePress = (course) => {
    // Handle course press navigation
    console.log(`Navigating to course: ${course.name}`);
    component={ExploreScreen}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardArrow: {
    fontSize: 24,
  },
});

export default HomeScreen;