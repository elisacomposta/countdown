import { useTranslation } from "react-i18next";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import commonStyles from "./styles/common.styles";
import { OptionButton } from "@/components/OptionButton";
import { ActionType } from "@/types/interfaces";
import { Card } from '@/components/Card'
import { Event } from '@/types/interfaces'
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { getEvents } from "@/utils/storage";
import { useDeleteAllAction } from "@/hooks/useDeleteAllAction";

export default function Archieve() {
    const { t } = useTranslation();
    const [events, setEvents] = useState<Event[]>([]);
    const { handleDeleteAll } = useDeleteAllAction(events);

    const fetchEvents = async () => {
        const fetchedEvents: Event[] = await getEvents();
        let events = fetchedEvents.filter(event => event.isArchived);
        events = events.sort((a, b) => a.endDate.getTime() - b.endDate.getTime());
        setEvents(events);
    }

    useFocusEffect(
        useCallback(() => {
            fetchEvents();
        }, [])
    )


    return (
        <SafeAreaView style={commonStyles.screen}>
            <View style={commonStyles.header}>
                <OptionButton actionType={ActionType.back} />
                <Text style={commonStyles.headerTitle}>{t('archive')}</Text>
                <OptionButton actionType={ActionType.other} onPress={handleDeleteAll} />
            </View>
            <ScrollView contentContainerStyle={commonStyles.main}>
                {events.map((event, index) => {
                    return (
                        <Card key={index} event={event} onActionCompleted={fetchEvents} />
                    )
                })}
            </ScrollView>
        </SafeAreaView >
    );

}