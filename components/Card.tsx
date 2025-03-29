import { View, Text, StyleSheet } from "react-native";

interface cardProps {text: string};

export function Card({text}: cardProps) {
    return (
        <View style={styles.card}>
            <Text>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#89aed6",
    borderRadius: 10,
    width: "93%",
    height: 150,
    padding: 20
  }
})