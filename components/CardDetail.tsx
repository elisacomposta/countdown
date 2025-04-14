import { View, Text } from 'react-native';
import { Event } from '@/types/interfaces';
import { locale } from '@/utils/locale';
import styles from './CardDetail.styles';
import { computeRemainingDays } from '@/utils/event';
import { useTranslation } from 'react-i18next';

export function CardDetail({ event }: { event: Event }) {
    const { t } = useTranslation();
    const remainingDays = computeRemainingDays(event)

    return (
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
    )
}