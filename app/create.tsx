import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
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
import { storeData, updateEventById } from '@/utils/storage';
import { Event } from '@/types/interfaces';
import uuid from 'react-native-uuid';

export default function CreateEvent() {
    const { event: eventStr } = useLocalSearchParams();
    const currentEvent: Event = eventStr ? JSON.parse(eventStr as string) : null;
    const { t } = useTranslation();
    const [name, setName] = useState(currentEvent ? currentEvent.title : '');
    const [date, setDate] = useState(currentEvent ? new Date(currentEvent.endDate) : new Date());
    const [selectedColor, setSelectedColor] = useState(currentEvent ? currentEvent.color : DEFAULT_EVENT_COLOR);
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
        };

        if (currentEvent) {
            updateEventById(currentEvent.id, newEvent)
        }
        else {
            storeData(newEvent, EVENT_PREFIX)
        }
        router.push('/');
    }

    return (
        <SafeAreaView style={commonStyles.screen}>
            <View style={commonStyles.header}>
                <OptionButton actionType="back" />
                <Text style={commonStyles.headerTitle}>{t('new_event')}</Text>
                <OptionButton actionType="save" onPress={handleSavePress} disabled={name.trim() === ''} />
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
                    <TouchableOpacity onPress={handleColorBoxPress}>
                        <View style={[styles.colorBox, { backgroundColor: selectedColor }]} />
                    </TouchableOpacity>
                </View>
                {isColorPickerOpen && <ColorPicker selectedColor={selectedColor} onColorChange={handleColorChange} />}
            </View>
        </SafeAreaView >
    );
}