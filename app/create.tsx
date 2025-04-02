import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { OptionButton } from '@/components/OptionButton';
import { ColorPicker } from '@/components/ColorPicker';
import { useTranslation } from 'react-i18next';
import { locale } from '@/utils/locale'
import { colors } from '@/utils/constants';
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from './styles/create.styles';
import commonStyles from './styles/common.styles';
import { useState } from 'react';

export default function CreateEvent() {
    const { t } = useTranslation();
    const [selectedColor, setSelectedColor] = useState(colors.celeste)
    const [isColorPickerOpen, setColorPickerOpen] = useState(false);

    const handleColorBoxPress = () => {
        setColorPickerOpen(!isColorPickerOpen);
    }

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
        setColorPickerOpen(false);
    }

    return (
        <SafeAreaView style={commonStyles.screen}>
            <View style={commonStyles.header}>
                <OptionButton action="back" />
                <Text style={commonStyles.headerTitle}>{t('new_event')}</Text>
                <OptionButton action="save" />
            </View>
            <View style={[commonStyles.main, { padding: 10 }]}>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldName}>{t('title')}</Text>
                    <TextInput style={styles.textInputBox} placeholder={t('event_name')}></TextInput>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldName}>{t('date')}</Text>
                    <DateTimePicker value={new Date()} locale={locale} display='compact' />
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