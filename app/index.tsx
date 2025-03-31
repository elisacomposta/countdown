import { View } from "react-native";
import { Card } from "@/components/Card";
import { colors } from "@/utils/constants";
import styles from "./styles/index.styles";
import '@/i18n';

export default function Index() {
  return (
    <View style={styles.container}>
      <Card title="Title" time={100} color={colors.celeste} />
    </View>
  );
}