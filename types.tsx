/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AVPlaybackSource } from "expo-av/build/AV.types";
import { ImageSourcePropType } from "react-native";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  NotFound: undefined;
  Course: { courseId: string };
  LessonModal: { courseId: string; lessonId: string };
};

export type CourseScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Course"
>;

export type LessonModalScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "LessonModal"
>;

export type ThemeColors = {
  light: ThemeColorOptions;
  dark: ThemeColorOptions;
};

export type ThemeColorOptions = {
  text: string;
  background: string;
  borderColor: string;
  icon: string;
  sliderControl: string;
  sliderBar: string;
  tint: string;
  tabIconDefault: string;
  tabIconSelected: string;
  wellBackground: string;
  wellBorderColor: string;
};

export type Course = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  imageSource: ImageSourcePropType;
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  name: string;
  description: string;
  audioSource: AVPlaybackSource;
};
