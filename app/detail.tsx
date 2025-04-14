import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { OptionButton } from '@/components/OptionButton';
import { useTranslation } from 'react-i18next';
import { Event } from '@/types/interfaces';
import { locale } from '@/utils/locale'
import commonStyles from './styles/common.styles';
import styles from './styles/detail.styles';
import { computeRemainingDays, deserializeEventString } from '@/utils/event';
import { useEventActions } from '@/hooks/useEventActions';

export default function DetailPage() {
    const { event: eventStr } = useLocalSearchParams();
    const { t } = useTranslation();
    const event: Event = deserializeEventString(eventStr as string)
    const remainingDays = computeRemainingDays(event)
    const { handleEventOptions } = useEventActions(event)

    return (
        <SafeAreaView style={commonStyles.screen}>
            <View style={commonStyles.header}>
                <OptionButton actionType="back" />
                <Text style={commonStyles.headerTitle}>{t('event_details')}</Text>
                <OptionButton actionType="other" onPress={handleEventOptions} />
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