import Colors from "../constants/Colors";
import { ThemeColorOptions } from "../types";
import useColorScheme from "./useColorScheme";

const useThemeColors = (): ThemeColorOptions => {
  const theme = useColorScheme();
  return theme === "dark" ? Colors.dark : Colors.light;
};

export default useThemeColors;
