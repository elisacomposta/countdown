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

export default function DetailPage() {
    const { event: eventStr } = useLocalSearchParams();
    const { t } = useTranslation();
    const event: Event = deserializeEventString(eventStr as string)
    const { handleEventOptions } = useEventActions(event)

    return (
        <SafeAreaView style={commonStyles.screen}>
            <View style={commonStyles.header}>
                <OptionButton actionType="back" />
                <Text style={commonStyles.headerTitle}>{t('event_details')}</Text>
                <OptionButton actionType="other" onPress={handleEventOptions} />
            </View>
            <View style={[commonStyles.main, styles.main]}>
                <CardDetail event={event} />
            </View>
        </SafeAreaView >
    )
}