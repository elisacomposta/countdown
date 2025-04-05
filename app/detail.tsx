import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { OptionButton } from '@/components/OptionButton';
import { useTranslation } from 'react-i18next';
import commonStyles from './styles/common.styles';
import styles from './styles/detail.styles';

export default function DetailPage() {
    const { title, time, color } = useLocalSearchParams() as { title: string; time: string; color: string };
    const { t } = useTranslation();

    return (
        <SafeAreaView style={commonStyles.screen}>
            <View style={commonStyles.header}>
                <OptionButton action="back" />
                <Text style={commonStyles.headerTitle}>{t('event_details')}</Text>
                <OptionButton action="other" />
            </View>
            <View style={[commonStyles.main, styles.main]}>
                <View style={[styles.card, { backgroundColor: color }]}>
                    <Text style={styles.cardText}>{title}</Text>
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "baseline" }}>
                            <Text style={styles.cardTime}>{time}</Text>
                            <Text style={styles.cardText}> {t('days', { count: Number(time) })}</Text>
                        </View>
                        <Text style={[styles.cardText, { fontSize: 20 }]}>30 giugno 2025</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}