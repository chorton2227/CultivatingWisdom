import React from "react";
import { Image } from "react-native";
import { Text, View } from "../../Themed";
import { Course } from "../../../types";
import styles from "./styles";
import LessonsList from "../LessonsList";
import useThemeColors from "../../../hooks/useThemeColors";

export interface CourseDetailsProps {
  course: Course;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {
  const themeColors = useThemeColors();
  const themeStyles = styles(themeColors);
  return (
    <View style={themeStyles.container}>
      <Image style={themeStyles.image} source={course.imageSource} />
      <View style={themeStyles.mainContainer}>
        <Text style={themeStyles.heading}>{course.name}</Text>
        <Text style={themeStyles.description}>{course.longDescription}</Text>
      </View>
      <View style={themeStyles.wellContainer}>
        <LessonsList courseId={course.id} lessons={course.lessons} />
      </View>
    </View>
  );
};

export default CourseDetails;
