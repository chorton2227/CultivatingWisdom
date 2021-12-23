import React from "react";
import { StyleSheet } from "react-native";
import CoursesList from "../components/Courses/CoursesList";
import { View } from "../components/Themed";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CoursesList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
});

export default HomeScreen;
