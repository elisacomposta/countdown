import { View, Text } from 'react-native';
import { ScalePressable } from './ScalePressable';
import { Event } from '@/types/interfaces';
import { locale } from '@/utils/locale';
import styles from './CardDetail.styles';
import { computeRemainingDays } from '@/utils/event';
import { useTranslation } from 'react-i18next';
import { useEventActions } from '@/hooks/useEventActions';
import { useRouter } from 'expo-router';

export function CardDetail({ event }: { event: Event }) {
    const { t } = useTranslation();
    const router = useRouter()
    const { handleEventOptions } = useEventActions(event, () => { router.push('/') })
    const remainingDays = computeRemainingDays(event)

    const handleLongPress = () => {
        handleEventOptions();
    }

    return (
        <ScalePressable onLongPress={handleLongPress}>
            <View style={[styles.card, { backgroundColor: event.color }]}>
                <Text style={styles.cardText} adjustsFontSizeToFit numberOfLines={4} minimumFontScale={0.5}>{event.title}</Text>
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
        </ScalePressable>
    )
}