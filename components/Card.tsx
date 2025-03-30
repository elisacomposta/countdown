import { View, Text, StyleSheet } from "react-native";

interface cardProps { title: string, time: number, color: string };

export function Card({ title: title, time: time, color: color }: cardProps) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={[styles.defaultText, styles.title]} adjustsFontSizeToFit numberOfLines={4} minimumFontScale={0.5}>{title}</Text>
      <Text style={[styles.defaultText, styles.time]} adjustsFontSizeToFit numberOfLines={4}>{time} days</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
  defaultText: {
    fontSize: 30,
    color: "#fff",
    flex: 1,
  },
  title: {
    fontWeight: "bold",
  },
  time: {
    textAlign: "right",
  }
})