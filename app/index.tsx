import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/Card";
import { colors } from "@/utils/constants";
import styles from "./styles/index.styles";
import '@/i18n';

export default function Index() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.eventContainer}>
          <Card title="Event 1" time={100} color={colors.celeste} />
        </View>
        <View style={styles.eventContainer}>
          <Card title="Event 2" time={200} color={colors.celeste} />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.archiveButton} onPress={() => console.log("Archive")}>
        <Text style={styles.archieveText}>{t('archive')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}