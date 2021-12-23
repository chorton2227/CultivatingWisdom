import { StyleSheet } from "react-native";
import { ThemeColorOptions } from "../../../types";

const styles = (colors: ThemeColorOptions) =>
  StyleSheet.create({
    container: {
      flexDirection: "column",
      paddingVertical: 10,
      backgroundColor: colors.wellBackground,
      borderBottomColor: colors.wellBorderColor,
      borderBottomWidth: 1,
    },
    header: {
      backgroundColor: colors.wellBackground,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerDetails: {
      flexDirection: "column",
      backgroundColor: colors.wellBackground,
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: "bold",
      paddingBottom: 5,
    },
    audioLength: {
      color: "#ccc",
    },
    description: {
      color: "#ccc",
      paddingTop: 5,
    },
  });

export default styles;
