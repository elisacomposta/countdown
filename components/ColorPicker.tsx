import { TouchableOpacity, View } from 'react-native';
import styles from './ColorPicker.styles';
import { palette } from '@/utils/constants';

export function ColorPicker({ selectedColor, onColorChange }: { selectedColor: string, onColorChange: (color: string) => void }) {

    return (
        <View style={styles.colorPickerContainer}>
            {palette.map((color) =>
                <TouchableOpacity onPress={() => onColorChange(color)} key={color}>
                    <View style={[
                        styles.colorBox,
                        { backgroundColor: color },
                        color === selectedColor && styles.selectedColorBox
                    ]} />
                </TouchableOpacity>
            )}
        </View >
    )
}