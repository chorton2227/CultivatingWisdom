import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableWithoutFeedback } from "react-native";
import useThemeColors from "../../../hooks/useThemeColors";
import { Course } from "../../../types";
import { Text, View } from "../../Themed";
import styles from "./styles";

export interface CoursesListItemProps {
  course: Course;
}

const CoursesListItem: React.FC<CoursesListItemProps> = ({ course }) => {
  const themeColors = useThemeColors();
  const themeStyles = styles(themeColors);
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Course", { courseId: course.id });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={themeStyles.container}>
        <Image style={themeStyles.image} source={course.imageSource} />
        <View style={themeStyles.body}>
          <Text style={themeStyles.name}>{course.name}</Text>
          <Text style={themeStyles.description}>{course.shortDescription}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CoursesListItem;
