import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { OptionButton } from '@/components/OptionButton';
import { ColorPicker } from '@/components/ColorPicker';
import { useTranslation } from 'react-i18next';
import { locale } from '@/utils/locale'
import { colors, EVENT_PREFIX } from '@/utils/constants';
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import styles from './styles/create.styles';
import commonStyles from './styles/common.styles';
import { useState } from 'react';
import { router } from 'expo-router';
import { storeData } from '@/utils/storage';
import { Event } from '@/types/interfaces';
import uuid from 'react-native-uuid';

export default function CreateEvent() {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const [selectedColor, setSelectedColor] = useState(colors.celeste)
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
        storeData(newEvent, EVENT_PREFIX)
        router.back()
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
                    <TextInput style={styles.textInputBox} placeholder={t('event_name')} onChangeText={handleNameChange}></TextInput>
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