import { StyleSheet } from "react-native";
import { ThemeColorOptions } from "../../../types";

const styles = (colors: ThemeColorOptions) =>
  StyleSheet.create({
    container: {
      flexDirection: "column",
      backgroundColor: colors.wellBackground,
    },
  });

export default styles;
