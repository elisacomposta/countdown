import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/Card";
import { OptionButton } from "@/components/OptionButton";
import { colors } from "@/utils/constants";
import { Event } from "@/types/interfaces";
import styles from "./styles/index.styles";
import commonStyles from "./styles/common.styles";
import '@/i18n';

export default function Index() {
  const { t } = useTranslation();

  const events: Event[] = [
    {
      id: "1",
      title: "Event 1",
      color: colors.celeste,
      endDate: new Date(2025, 3, 7),
      creationDate: new Date(),
      lastModifiedDate: new Date(),
    },
    {
      id: "2",
      title: "Event 2",
      color: colors.celeste,
      endDate: new Date(2025, 6, 19),
      creationDate: new Date(),
      lastModifiedDate: new Date(),
    },
  ]

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
        <Card event={events[0]} />
        <Card event={events[1]} />
      </ScrollView>
      <View style={commonStyles.footer}>
        <TouchableOpacity style={styles.archiveButton} onPress={() => console.log("Archive")}>
          <Text style={styles.archieveText}>{t('archive')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
}