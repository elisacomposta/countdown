import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "93%",
    height: 150,
    padding: 30,
    borderRadius: 16,
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
