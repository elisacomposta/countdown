import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { Card } from "@/components/Card";
import { OptionButton } from "@/components/OptionButton";
import { colors } from "@/utils/constants";
import { Event } from "@/types/interfaces";
import styles from "./styles/index.styles";
import commonStyles from "./styles/common.styles";
import '@/i18n';
import { freeAllStorage, getEvents } from "@/utils/storage";
import { useFocusEffect } from "expo-router";

export default function Index() {
  const [events, setEvents] = useState<Event[]>([])
  const { t } = useTranslation();
  //freeAllStorage();

  useFocusEffect(
    useCallback(() => {
      const fetchEvents = async () => {
        const fetchedEvents: Event[] = await getEvents();
        fetchedEvents.sort((a, b) => a.endDate.getTime() - b.endDate.getTime());
        setEvents(fetchedEvents);
      }

      fetchEvents();
    }, [])
  );

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
            <Card key={index} event={event} />
          )
        })}
      </ScrollView>
      <View style={commonStyles.footer}>
        <TouchableOpacity style={styles.archiveButton} onPress={() => console.log("Archive")}>
          <Text style={styles.archieveText}>{t('archive')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
}