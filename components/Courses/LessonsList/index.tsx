import React from "react";
import { View } from "../../Themed";
import styles from "./styles";
import { Lesson } from "../../../types";
import LessonsListItem from "../LessonsListItem";
import useThemeColors from "../../../hooks/useThemeColors";

export interface LessonsListProps {
  courseId: string;
  lessons: Lesson[];
}

const LessonsList: React.FC<LessonsListProps> = ({ courseId, lessons }) => {
  const themeColors = useThemeColors();
  const themeStyles = styles(themeColors);
  return (
    <View style={themeStyles.container}>
      {lessons.map((lesson) => (
        <LessonsListItem key={lesson.id} courseId={courseId} lesson={lesson} />
      ))}
    </View>
  );
};

export default LessonsList;
