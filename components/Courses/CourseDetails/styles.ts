import { StyleSheet } from "react-native";
import Layout from "../../../constants/Layout";
import { ThemeColorOptions } from "../../../types";

const styles = (colors: ThemeColorOptions) =>
  StyleSheet.create({
    container: {
      flexDirection: "column",
    },
    image: {
      width: Layout.window.width,
      height: 200,
    },
    mainContainer: {
      paddingHorizontal: 32,
      paddingVertical: 10,
      borderBottomColor: colors.wellBorderColor,
      borderBottomWidth: 1,
    },
    heading: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5,
    },
    description: {
      marginBottom: 10,
    },
    wellContainer: {
      backgroundColor: colors.wellBackground,
      paddingVertical: 10,
      paddingHorizontal: 18,
    },
  });

export default styles;
