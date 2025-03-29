import { View, StyleSheet } from "react-native";
import { Card } from "@/components/Card";

export default function Index() {
  return (
    <View style={styles.container}>
      <Card text="Miao!"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
