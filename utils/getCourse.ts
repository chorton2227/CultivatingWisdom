import Courses from "../data/courses/Courses";
import { Course } from "../types";

export const getCourse = (courseId: string): Course | undefined => {
  return Courses.find((course) => course.id === courseId);
};
