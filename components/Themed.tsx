/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  ScrollView as DefaultScrollView,
  Text as DefaultText,
  View as DefaultView,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { ThemeColorOptions } from "../types";

export function useThemeColor(
  colorName: keyof ThemeColorOptions,
  props?: { light?: string; dark?: string }
) {
  const theme = useColorScheme();
  const colorFromProps = props ? props[theme] : undefined;

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type ScrollViewProps = ThemeProps & DefaultScrollView["props"];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor("text", { light: lightColor, dark: darkColor });

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor("background", {
    light: lightColor,
    dark: darkColor,
  });

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ScrollView(props: ScrollViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor("background", {
    light: lightColor,
    dark: darkColor,
  });

  return (
    <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />
  );
}
