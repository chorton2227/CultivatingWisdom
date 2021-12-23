import { StyleSheet } from "react-native";
import { ThemeColorOptions } from "../../../types";

const styles = (colors: ThemeColorOptions) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      paddingVertical: 10,
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: colors.borderColor,
    },
    image: {
      width: 97.7,
      height: 55,
      marginRight: 10,
    },
    body: {
      flex: 1,
    },
    name: {
      fontSize: 14,
      fontWeight: "bold",
    },
    description: {},
  });

export default styles;
