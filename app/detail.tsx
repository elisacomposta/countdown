import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { OptionButton } from '@/components/OptionButton';
import { useTranslation } from 'react-i18next';
import { Event } from '@/types/interfaces';
import commonStyles from './styles/common.styles';
import styles from './styles/detail.styles';
import { deserializeEventString } from '@/utils/event';
import { useEventActions } from '@/hooks/useEventActions';
import { CardDetail } from '@/components/CardDetail';
import { useFocusEffect } from 'expo-router';
import { getEventById } from '@/utils/storage'
import { useCallback, useState } from 'react';

export default function DetailPage() {
    const { eventStr } = useLocalSearchParams();
    const { t } = useTranslation();
    const parsedEvent: Event = deserializeEventString(eventStr as string)
    const [currentEvent, setCurrentEvent] = useState<Event>(parsedEvent)
    const { handleEventOptions } = useEventActions(currentEvent)

    const fetchEvent = async () => {
        const fetchedEvent: Event = await getEventById(parsedEvent.id)
        setCurrentEvent(fetchedEvent)
    }

    useFocusEffect(
        useCallback(() => {
            fetchEvent()
        }, [])
    )

    return (
        <SafeAreaView style={commonStyles.screen}>
            <View style={commonStyles.header}>
                <OptionButton actionType="back" />
                <Text style={commonStyles.headerTitle}>{t('event_details')}</Text>
                <OptionButton actionType="other" onPress={handleEventOptions} />
            </View>
            <View style={[commonStyles.main, styles.main]}>
                <CardDetail event={currentEvent} />
            </View>
        </SafeAreaView >
    )
}