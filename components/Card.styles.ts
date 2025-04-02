import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 120,
    padding: 30,
    borderRadius: 16,
    boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.25)",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    flex: 1,
    fontWeight: "bold",
  },
  time: {
    fontSize: 30,
    color: "#fff",
    flex: 1,
    textAlign: "right",
  }
});

export default styles;
