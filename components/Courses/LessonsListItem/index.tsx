import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import useThemeColors from "../../../hooks/useThemeColors";
import { Lesson } from "../../../types";
import { Text, View } from "../../Themed";
import styles from "./styles";

export interface LessonsListItemProps {
  courseId: string;
  lesson: Lesson;
}

const LessonsListItem: React.FC<LessonsListItemProps> = ({
  courseId,
  lesson,
}) => {
  const themeColors = useThemeColors();
  const themeStyles = styles(themeColors);
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("LessonModal", {
      courseId: courseId,
      lessonId: lesson.id,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={themeStyles.container}>
        <View style={themeStyles.header}>
          <View style={themeStyles.headerDetails}>
            <Text style={themeStyles.name}>{lesson.name}</Text>
            <Text style={themeStyles.audioLength}>4:34</Text>
          </View>
          <MaterialIcons
            name="play-circle-outline"
            size={28}
            color={themeColors.text}
          />
        </View>
        {!!lesson.description && (
          <Text style={themeStyles.description}>{lesson.description}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LessonsListItem;
