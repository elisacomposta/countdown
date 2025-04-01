import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles/CreateEvent.styles';
import { OptionButton } from '@/components/OptionButton';
import { Text } from 'react-native';

export default function CreateEvent() {
    return (
        <SafeAreaView>
            <OptionButton action="back" />
            <Text>Create event page</Text>
        </SafeAreaView>
    );
}