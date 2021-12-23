import { ThemeColors } from "../types";

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

const themeColors: ThemeColors = {
  light: {
    text: "#000",
    background: "#fff",
    borderColor: "#ccc",
    icon: "#000",
    sliderControl: "#000",
    sliderBar: "#999",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    wellBackground: "#dedede",
    wellBorderColor: "#bbb",
  },
  dark: {
    text: "#fff",
    background: "#000",
    borderColor: "#555",
    icon: "#fff",
    sliderControl: "#fff",
    sliderBar: "#777",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    wellBackground: "#333",
    wellBorderColor: "#777",
  },
};

export default themeColors;
