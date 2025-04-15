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
import { useSortActions } from "@/hooks/useSortActions";
import { ActionType, SortType } from "@/types/interfaces";

export default function Index() {
  const [events, setEvents] = useState<Event[]>([])
  const { t } = useTranslation();
  const [sortType, setSortType] = useState<SortType>(SortType.end_date);
  const { handleSortActions } = useSortActions(setSortType);

  const fetchEvents = async () => {
    const fetchedEvents: Event[] = await getEvents();
    switch (sortType) {
      case SortType.end_date: {
        fetchedEvents.sort((a, b) => a.endDate.getTime() - b.endDate.getTime());
        break;
      }
      case SortType.creation_date: {
        fetchedEvents.sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());
        break;
      }
      case SortType.last_edit_date: {
        fetchedEvents.sort((a, b) => a.lastModifiedDate.getTime() - b.lastModifiedDate.getTime());
        break;
      }
    }
    setEvents(fetchedEvents);
  }

  useFocusEffect(
    useCallback(() => {
      fetchEvents();
    }, [sortType])
  );

  return (
    <SafeAreaView style={commonStyles.screen}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerTitle}>{t('my_events')}</Text>
        <View style={styles.optionsContainer}>
          <OptionButton actionType={ActionType.sort} onPress={handleSortActions} />
          <OptionButton actionType={ActionType.create} />
        </View>
      </View>
      <ScrollView contentContainerStyle={commonStyles.main}>
        {events.map((event, index) => {
          return (
            <Card key={index} event={event} onDelete={fetchEvents} />
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