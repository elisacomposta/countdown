import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    height: 120,
    padding: 30,
    borderRadius: 16,
    marginBottom: 10,
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
