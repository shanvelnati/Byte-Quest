import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const courses = [
  { id: '1', name: 'Course 1'},
  { id: '2', name: 'Course 2'},
  { id: '3', name: 'Course 3'},
  { id: '4', name: 'Course 4'},
  { id: '5', name: 'Course 5'},
  { id: '6', name: 'Course 6'},
  // Add more courses as needed
];

export const CourseCard = ({ course, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={course.image} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{course.name}</Text>
      <Text style={styles.cardArrow}>&#8250;</Text>
    </View>
  </TouchableOpacity>
);

export const handleCoursePress = (course) => {
  // Handle course press navigation
  console.log(`Navigating to course: ${course.name}`);
};
const ExploreScreen = () => {

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

export const styles = StyleSheet.create({
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

export default ExploreScreen;