import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const courses = [
  { id: '1', title: 'Course 1' },
  { id: '2', title: 'Course 2' },
  // Add more courses as needed
];

function CourseCard({ title }) {
  return (
    <View style={styles.card}>
      <Text>{title}</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <FlatList
      data={courses}
      renderItem={({ item }) => <CourseCard title={item.title} />}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 20,
    backgroundColor: '#fff',
    // Add more styling as needed
    borderRadius: 5,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
  },
});

export default HomeScreen;