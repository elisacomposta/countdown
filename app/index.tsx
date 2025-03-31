import { SafeAreaView, ScrollView, View } from "react-native";
import { Card } from "@/components/Card";
import { colors } from "@/utils/constants";
import styles from "./styles/index.styles";
import '@/i18n';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <ScrollView>
        <View style={styles.container}>
          <Card title="Event 1" time={100} color={colors.celeste} />
        </View>
        <View style={styles.container}>
          <Card title="Event 2" time={200} color={colors.celeste} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}