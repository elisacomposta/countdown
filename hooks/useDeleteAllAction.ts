import { useActionSheet } from '@expo/react-native-action-sheet';
import { Event } from '@/types/interfaces';
import { removeEventById } from '@/utils/storage';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import { useTranslation } from 'react-i18next';

export const useDeleteAllAction = (events: Event[]) => {
    const { showActionSheetWithOptions } = useActionSheet();
    const { t } = useTranslation();
    const router = useRouter();

    const handleDelete = () => {
        const deleteAllEvents = async () => {
            for (const event of events) {
                await removeEventById(event.id);
            }
            router.push('/');
        }
        Alert.alert(t('delete_all_archived'), t('delete_alert_message'), [
            { text: t('cancel'), style: "cancel" },
            { text: t('delete'), style: "destructive", onPress: deleteAllEvents }
        ], { cancelable: true })
    }

    const handleDeleteAll = () => {
        const options = [t('delete_all'), t('cancel')];
        const destructiveButtonIndex = 0;
        const cancelButtonIndex = 1;

        showActionSheetWithOptions({
            options,
            destructiveButtonIndex,
            cancelButtonIndex,
        }, (selectedIndex) => {
            if (selectedIndex === 0) {
                handleDelete();
            }
        });
    };

    return { handleDeleteAll };
}