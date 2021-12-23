import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Text, View } from "../../components/Themed";
import { LessonModalScreenProps } from "../../types";
import { getCourse } from "../../utils/getCourse";
import { getLesson } from "../../utils/getLesson";
import { Audio, AVPlaybackStatus } from "expo-av";
import Slider from "@react-native-community/slider";
import styles from "./styles";
import useThemeColors from "../../hooks/useThemeColors";

const audio = new Audio.Sound();

const LessonModalScreen: React.FC<LessonModalScreenProps> = ({ route }) => {
  const themeColors = useThemeColors();
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number | undefined>(undefined);
  const [timeElapsed, setTimeElapsed] = useState<number | undefined>(undefined);
  const [percent, setPercent] = useState(0);

  const course = getCourse(route.params.courseId);
  const lesson = getLesson(route.params.courseId, route.params.lessonId);

  if (!course || !lesson) {
    navigation.reset({ index: 0, routes: [{ name: "Home" }] });
    return null;
  }

  useEffect(() => {
    // Load audio on mount
    (async () => {
      audio.setOnPlaybackStatusUpdate(onAudioStatusUpdate);
      await audio.loadAsync(
        lesson.audioSource,
        {
          shouldPlay: true,
        },
        true
      );
      setIsPlaying(true);
    })();

    // Unload audio on unmount
    return () => {
      (async () => {
        await audio.unloadAsync();
      })();
    };
  }, []);

  const onAudioStatusUpdate = (status: AVPlaybackStatus) => {
    if (!status.isLoaded) {
      return;
    }

    if (status.didJustFinish) {
      setIsPlaying(false);
      setPercent(0);
      setTimeElapsed(0);
      return;
    }

    let newPercent = 0;
    if (status.durationMillis) {
      newPercent = (status.positionMillis / status.durationMillis) * 100;
    }

    setTimeElapsed(status.positionMillis);
    setDuration(status.durationMillis);
    setPercent(newPercent);
  };

  const onClose = async () => {
    navigation.goBack();
  };

  const onPausePress = async () => {
    await audio.pauseAsync();
    setIsPlaying(false);
  };

  const onPlayPress = async () => {
    await audio.playAsync();
    setIsPlaying(true);
  };

  const onRewindPress = async (millis: number) => {
    if (!timeElapsed) {
      return;
    }

    let newPosition = timeElapsed - millis;
    if (newPosition < 0) {
      newPosition = 0;
    }

    await audio.setPositionAsync(newPosition);
  };

  const onFastForward = async (millis: number) => {
    if (!timeElapsed || !duration) {
      return;
    }

    let newPosition = timeElapsed + millis;
    if (newPosition > duration) {
      newPosition = duration;
    }

    await audio.setPositionAsync(newPosition);
  };

  const onSeek = async (newPercent: number) => {
    if (!duration) {
      return;
    }

    const newPosition = (newPercent / 100) * duration;
    await audio.setPositionAsync(newPosition);
  };

  const msToTime = (millis: number): string => {
    const pad = (n: number, z?: number): string => {
      z = z || 2;
      return ("00" + n).slice(-z);
    };

    const ms = millis % 1000;
    millis = (millis - ms) / 1000;
    const secs = millis % 60;
    millis = (millis - secs) / 60;
    const mins = millis % 60;
    const hrs = (millis - mins) / 60;
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  };

  return (
    <View style={styles.container}>
      <MaterialIcons
        style={styles.close}
        name="close"
        size={36}
        color={themeColors.icon}
        onPress={onClose}
      />
      <View style={styles.detailContainer}>
        <Image style={styles.image} source={course.imageSource} />
        <Text style={styles.lessonName}>{lesson.name}</Text>
        <Text style={styles.courseName}>{course.name}</Text>
      </View>
      <View style={styles.playerContainer}>
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={percent}
            onValueChange={(value) => onSeek(value)}
            minimumTrackTintColor={themeColors.sliderBar}
            maximumTrackTintColor={themeColors.sliderBar}
            thumbTintColor={themeColors.sliderControl}
          />
        </View>
        <View style={styles.timeContainer}>
          {timeElapsed !== undefined && (
            <Text style={styles.timeElapsed}>{msToTime(timeElapsed)}</Text>
          )}
          {duration !== undefined && (
            <Text style={styles.duration}>{msToTime(duration)}</Text>
          )}
        </View>
        <View style={styles.controlContainer}>
          <MaterialCommunityIcons
            style={styles.controlIcon}
            name="rewind-30"
            size={36}
            color={themeColors.icon}
            onPress={() => onRewindPress(30000)}
          />
          <MaterialCommunityIcons
            style={styles.controlIcon}
            name="rewind-10"
            size={36}
            color={themeColors.icon}
            onPress={() => onRewindPress(10000)}
          />
          {isPlaying ? (
            <MaterialIcons
              style={styles.controlIcon}
              name="pause-circle-filled"
              size={72}
              color={themeColors.icon}
              onPress={onPausePress}
            />
          ) : (
            <MaterialIcons
              style={styles.controlIcon}
              name="play-circle-filled"
              size={72}
              color={themeColors.icon}
              onPress={onPlayPress}
            />
          )}
          <MaterialCommunityIcons
            style={styles.controlIcon}
            name="fast-forward-10"
            size={36}
            color={themeColors.icon}
            onPress={() => onFastForward(10000)}
          />
          <MaterialCommunityIcons
            style={styles.controlIcon}
            name="fast-forward-30"
            size={36}
            color={themeColors.icon}
            onPress={() => onFastForward(30000)}
          />
        </View>
      </View>
    </View>
  );
};

export default LessonModalScreen;
