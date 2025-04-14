import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { ScalePressable } from "@/components/ScalePressable";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { Card } from "@/components/Card";
import { OptionButton } from "@/components/OptionButton";
import { Event } from "@/types/interfaces";
import styles from "./styles/index.styles";
import commonStyles from "./styles/common.styles";
import '@/i18n';
import { getEvents } from "@/utils/storage";
import { useFocusEffect } from "expo-router";

export default function Index() {
  const [events, setEvents] = useState<Event[]>([])
  const { t } = useTranslation();

  const fetchEvents = async () => {
    const fetchedEvents: Event[] = await getEvents();
    fetchedEvents.sort((a, b) => a.endDate.getTime() - b.endDate.getTime());
    setEvents(fetchedEvents);
  }

  useFocusEffect(
    useCallback(() => {
      fetchEvents();
    }, [])
  );

  const handleDeleteEvent = () => {
    fetchEvents();
  }

  return (
    <SafeAreaView style={commonStyles.screen}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerTitle}>{t('my_events')}</Text>
        <View style={styles.optionsContainer}>
          <OptionButton actionType="sort" />
          <OptionButton actionType="create" />
        </View>
      </View>
      <ScrollView contentContainerStyle={commonStyles.main}>
        {events.map((event, index) => {
          return (
            <Card key={index} event={event} onDelete={handleDeleteEvent} />
          )
        })}
      </ScrollView>
      <View style={commonStyles.footer}>
        <ScalePressable style={styles.archiveButton} onPress={() => console.log("Archive")}>
          <Text style={styles.archieveText}>{t('archive')}</Text>
        </ScalePressable>
      </View>
    </SafeAreaView >
  );
}