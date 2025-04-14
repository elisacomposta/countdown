import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { removeEventById } from '@/utils/storage';
import { useRouter } from 'expo-router';
import { Event } from '@/types/interfaces';

export const useEventActions = (event: Event) => {
    const { t } = useTranslation();
    const { showActionSheetWithOptions } = useActionSheet();
    const router = useRouter();

    const onOtherPress = () => {
        const options = [t('delete'), t('edit'), t('cancel')]
        const destructiveButtonIndex = 0
        const cancelButtonIndex = 2

        showActionSheetWithOptions({
            options,
            destructiveButtonIndex,
            cancelButtonIndex,
        }, (selectedIndex) => {
            switch (selectedIndex) {
                case 0: {
                    const deleteEvent = async () => {
                        await removeEventById(event.id)
                        router.back()
                    }
                    Alert.alert(t('delete_alert_title'), t('delete_alert_message'), [
                        { text: t('cancel'), style: "cancel" },
                        { text: t('delete'), style: "destructive", onPress: deleteEvent }
                    ], { cancelable: true })
                    break;
                }
                case 1: {
                    router.push({ pathname: "/create", params: { event: JSON.stringify(event) } });
                    break;
                }
            }
        })
    }

    return { onOtherPress };
}