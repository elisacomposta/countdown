import { useTranslation } from 'react-i18next';
import { useActionSheet } from '@expo/react-native-action-sheet';

export const useSortActions = () => {
    const { t } = useTranslation();
    const { showActionSheetWithOptions } = useActionSheet();

    const handleSortActoons = () => {
        showActionSheetWithOptions({
            title: t('sort_by'),
            options: [t('remaining_days'), t('creation_date'), t('last_edit_date'), t('cancel')],
            cancelButtonIndex: 3,
        }, (selectedIndex) => {
            switch (selectedIndex) {
                case 0: {
                    console.log("Sort by name");
                    break;
                }
                case 1: {
                    console.log("Sort by date");
                    break;
                }
            }
        })
    }

    return { handleSortActoons }
}