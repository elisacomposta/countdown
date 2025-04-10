import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { OptionButton } from '@/components/OptionButton';
import { useTranslation } from 'react-i18next';
import { Event } from '@/types/interfaces';
import { locale } from '@/utils/locale'
import commonStyles from './styles/common.styles';
import styles from './styles/detail.styles';

export default function DetailPage() {
    const { event: eventStr } = useLocalSearchParams();
    const { t } = useTranslation();

    const parsedEvent = JSON.parse(eventStr as string) as Event;
    const event = {
        ...parsedEvent,
        endDate: new Date(parsedEvent.endDate),
        creationDate: new Date(parsedEvent.creationDate),
        lastModifiedDate: new Date(parsedEvent.lastModifiedDate),
    }

    const countdownDuration = event.endDate.getTime() - new Date().getTime()
    const remainingDays = countdownDuration > 0 ? Math.floor(countdownDuration / (1000 * 60 * 60 * 24)) + 1 : 0;

    return (
        <SafeAreaView style={commonStyles.screen}>
            <View style={commonStyles.header}>
                <OptionButton actionType="back" />
                <Text style={commonStyles.headerTitle}>{t('event_details')}</Text>
                <OptionButton actionType="other" />
            </View>
            <View style={[commonStyles.main, styles.main]}>
                <View style={[styles.card, { backgroundColor: event.color }]}>
                    <Text style={styles.cardText}>{event.title}</Text>
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "baseline" }}>
                            <Text style={styles.cardTime}>{remainingDays}</Text>
                            <Text style={styles.cardText}> {t('days', { count: Number(remainingDays) })}</Text>
                        </View>
                        <Text style={[styles.cardText, { fontSize: 20 }]}>
                            {event.endDate.toLocaleDateString(locale, {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            })}
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}