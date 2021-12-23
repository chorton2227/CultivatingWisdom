import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 64,
    paddingHorizontal: 32,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  close: {
    marginLeft: "auto",
    marginBottom: 32,
    position: "absolute",
    top: 64,
    right: 32,
  },
  detailContainer: {
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 168.75,
    marginBottom: 16,
  },
  lessonName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  courseName: {
    fontSize: 16,
    color: "#999",
  },
  playerContainer: {},
  sliderContainer: {
    flexDirection: "row",
  },
  slider: {
    width: "100%",
    height: 20,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  timeElapsed: {
    fontWeight: "bold",
  },
  duration: {
    fontWeight: "bold",
  },
  controlContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  controlIcon: {},
});

export default styles;
