import { useNavigation } from "@react-navigation/native";
import React from "react";
import CourseDetails from "../components/Courses/CourseDetails";
import { ScrollView } from "../components/Themed";
import { CourseScreenProps } from "../types";
import { getCourse } from "../utils/getCourse";

const CourseScreen: React.FC<CourseScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  const course = getCourse(route.params.courseId);

  if (!course) {
    navigation.reset({ index: 0, routes: [{ name: "Home" }] });
    return null;
  }

  return (
    <ScrollView nestedScrollEnabled={true}>
      <CourseDetails course={course} />
    </ScrollView>
  );
};

export default CourseScreen;
