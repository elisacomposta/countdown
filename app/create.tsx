import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import styles from './styles/create.styles';
import commonStyles from './styles/common.styles';
import { OptionButton } from '@/components/OptionButton';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function CreateEvent() {
    const { t } = useTranslation();

    return (
        <SafeAreaView style={commonStyles.screen}>
            <View style={commonStyles.header}>
                <OptionButton action="back" />
                <Text style={[commonStyles.headerTitle]}>{t('new_event')}</Text>
                <OptionButton action="save" />
            </View>
            <View style={commonStyles.main}>
                <Text>Create Event</Text>
            </View>
        </SafeAreaView>
    );
}