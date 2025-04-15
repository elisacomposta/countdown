import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { removeEventById, updateEvent } from '@/utils/storage';
import { useRouter } from 'expo-router';
import { Event } from '@/types/interfaces';

export const useEventActions = (event: Event, onActionCompleted?: () => void) => {
    const { t } = useTranslation();
    const { showActionSheetWithOptions } = useActionSheet();
    const router = useRouter();

    const handleEventOptions = () => {
        const archieveOptionText = event.isArchived ? t('unarchive') : t('archive_action')
        const options = [t('delete'), t('edit'), archieveOptionText, t('cancel')]
        const destructiveButtonIndex = 0
        const cancelButtonIndex = 3

        const handleDelete = () => {
            const deleteEvent = async () => {
                await removeEventById(event.id)
                onActionCompleted && onActionCompleted()
            }
            Alert.alert(t('delete_alert_title'), t('delete_alert_message'), [
                { text: t('cancel'), style: "cancel" },
                { text: t('delete'), style: "destructive", onPress: deleteEvent }
            ], { cancelable: true })
        }

        showActionSheetWithOptions({
            options,
            destructiveButtonIndex,
            cancelButtonIndex,
        }, (selectedIndex) => {
            switch (selectedIndex) {
                case 0: {
                    handleDelete();
                    break;
                }
                case 1: {
                    router.push({ pathname: "/create", params: { event: JSON.stringify(event) } });
                    break;
                }
                case 2: {
                    updateEvent({ ...event, isArchived: !event.isArchived });
                    onActionCompleted && onActionCompleted()
                    break;
                }
            }
        })
    }

    return { handleEventOptions };
}