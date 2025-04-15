import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert, Text, TextInput, View } from 'react-native';
import { ScalePressable } from '@/components/ScalePressable';
import { OptionButton } from '@/components/OptionButton';
import { ColorPicker } from '@/components/ColorPicker';
import { useTranslation } from 'react-i18next';
import { locale } from '@/utils/locale'
import { DEFAULT_EVENT_COLOR, EVENT_PREFIX } from '@/utils/constants';
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import styles from './styles/create.styles';
import commonStyles from './styles/common.styles';
import { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { storeData, updateEvent } from '@/utils/storage';
import { Event } from '@/types/interfaces';
import uuid from 'react-native-uuid';
import { ActionType } from '@/types/interfaces';

export default function CreateEvent() {
    const { event: eventStr } = useLocalSearchParams();
    const currentEvent: Event = eventStr ? JSON.parse(eventStr as string) : null;
    const { t } = useTranslation();
    const [name, setName] = useState(currentEvent?.title || '');
    const [date, setDate] = useState(currentEvent ? new Date(currentEvent?.endDate) : new Date());
    const [selectedColor, setSelectedColor] = useState(currentEvent?.color || DEFAULT_EVENT_COLOR);
    const [isColorPickerOpen, setColorPickerOpen] = useState(false);

    const handleNameChange = (text: string) => {
        setName(text);
    }

    const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        if (selectedDate) {
            setDate(selectedDate);
        }
    }

    const handleColorBoxPress = () => {
        setColorPickerOpen(!isColorPickerOpen);
    }

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
        setColorPickerOpen(false);
    }

    const handleSavePress = () => {
        const newEvent: Event = {
            id: uuid.v4(),
            title: name,
            color: selectedColor,
            endDate: date,
            creationDate: new Date(),
            lastModifiedDate: new Date(),
            isArchived: false
        };

        if (currentEvent) {
            updateEvent({
                ...newEvent,
                id: currentEvent.id,
                creationDate: currentEvent.creationDate,
            });
        }
        else {
            storeData(newEvent, EVENT_PREFIX)
        }
        router.back();
    }

    const handleOnBackPress = () => {
        const areSameDay = (d1: Date, d2: Date) =>
            d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();

        const hasChanges = currentEvent ?
            (name !== currentEvent.title || selectedColor !== currentEvent.color || !areSameDay(date, new Date(currentEvent.endDate))) :
            (name !== '' || selectedColor !== DEFAULT_EVENT_COLOR || !areSameDay(date, new Date()));

        if (hasChanges) {
            Alert.alert(t('discard_alert_title'), t('discard_alert_message'), [
                { text: t('cancel'), style: "cancel" },
                { text: t('discard'), style: "destructive", onPress: () => router.back() }
            ], { cancelable: true })
        } else {
            router.back();
        }
    }

    return (
        <SafeAreaView style={commonStyles.screen}>
            <View style={commonStyles.header}>
                <OptionButton actionType={ActionType.back} onPress={handleOnBackPress} />
                <Text style={commonStyles.headerTitle}>{currentEvent ? t('edit_event') : t('new_event')}</Text>
                <OptionButton actionType={ActionType.save} onPress={handleSavePress} disabled={name.trim() === ''} />
            </View>
            <View style={[commonStyles.main, { padding: 10 }]}>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldName}>{t('title')}</Text>
                    <TextInput style={styles.textInputBox} placeholder={t('event_name')} onChangeText={handleNameChange}>{name}</TextInput>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldName}>{t('date')}</Text>
                    <DateTimePicker value={date} locale={locale} display='compact' onChange={handleDateChange} />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldName}>{t('color')}</Text>
                    <ScalePressable onPress={handleColorBoxPress}>
                        <View style={[styles.colorBox, { backgroundColor: selectedColor }]} />
                    </ScalePressable>
                </View>
                {isColorPickerOpen && <ColorPicker selectedColor={selectedColor} onColorChange={handleColorChange} />}
            </View>
        </SafeAreaView >
    );
}