import { View, StyleSheet } from "react-native";
import { Card } from "@/components/Card";
import { colors } from "@/utils/constants";

export default function Index() {
  return (
    <View style={styles.container}>
      <Card title="Title" time={200} color={colors.celeste} />
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
