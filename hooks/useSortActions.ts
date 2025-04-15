import { useTranslation } from 'react-i18next';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { Dispatch, SetStateAction } from 'react';
import { SortType } from '@/types/interfaces';

export const useSortActions = (setSortType: Dispatch<SetStateAction<SortType>>) => {
    const { t } = useTranslation();
    const { showActionSheetWithOptions } = useActionSheet();

    const handleSortActions = async () => {
        showActionSheetWithOptions({
            title: t('sort_by'),
            options: [t('remaining_days'), t('creation_date'), t('last_edit_date'), t('cancel')],
            cancelButtonIndex: 3,
        }, (selectedIndex) => {
            switch (selectedIndex) {
                case 0: {
                    setSortType(SortType.end_date);
                    break;
                }
                case 1: {
                    setSortType(SortType.creation_date);
                    break;
                }
                case 2: {
                    setSortType(SortType.last_edit_date);
                    break;
                }
            }
        })
    }

    return { handleSortActions }
}