import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import styles from './styles/create.styles';
import commonStyles from './styles/common.styles';
import { OptionButton } from '@/components/OptionButton';
import { Text } from 'react-native';

export default function CreateEvent() {
    return (
        <SafeAreaView style={commonStyles.screen}>
            <View style={commonStyles.header}>
                <OptionButton action="back" />
            </View>
            <View style={commonStyles.main}>
                <Text>Create Event</Text>
            </View>
        </SafeAreaView>
    );
}