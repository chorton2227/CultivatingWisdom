import { Lesson } from "../types";
import { getCourse } from "./getCourse";

export const getLesson = (
  courseId: string,
  lessonId: string
): Lesson | undefined => {
  const course = getCourse(courseId);
  return course?.lessons.find((lesson) => lesson.id === lessonId);
};
