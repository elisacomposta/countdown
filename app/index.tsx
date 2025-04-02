import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/Card";
import { OptionButton } from "@/components/OptionButton";
import { colors } from "@/utils/constants";
import styles from "./styles/index.styles";
import commonStyles from "./styles/common.styles";
import '@/i18n';

export default function Index() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={commonStyles.screen}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerTitle}>{t('my_events')}</Text>
        <View style={styles.optionsContainer}>
          <OptionButton action="sort" />
          <OptionButton action="create" />
        </View>
      </View>
      <ScrollView contentContainerStyle={commonStyles.main}>
        <Card title="Event 1" time={100} color={colors.celeste} />
        <Card title="Event 2" time={200} color={colors.celeste} />
      </ScrollView>
      <View style={commonStyles.footer}>
        <TouchableOpacity style={styles.archiveButton} onPress={() => console.log("Archive")}>
          <Text style={styles.archieveText}>{t('archive')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
}