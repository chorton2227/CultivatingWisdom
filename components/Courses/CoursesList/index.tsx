import React from "react";
import { ScrollView, Text, View } from "../../Themed";
import Courses from "../../../data/courses/Courses";
import CoursesListItem from "../CoursesListItem";
import styles from "./styles";

const CoursesList = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Courses</Text>
      <View>
        {Courses.map((course) => (
          <CoursesListItem key={course.id} course={course} />
        ))}
      </View>
    </ScrollView>
  );
};

export default CoursesList;
