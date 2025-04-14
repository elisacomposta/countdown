import { View } from 'react-native';
import { ScalePressable } from './ScalePressable';
import styles from './ColorPicker.styles';
import { palette } from '@/utils/constants';

export function ColorPicker({ selectedColor, onColorChange }: { selectedColor: string, onColorChange: (color: string) => void }) {

    return (
        <View style={styles.colorPickerContainer}>
            {palette.map((color) =>
                <ScalePressable onPress={() => onColorChange(color)} key={color} disableFeedback={true}>
                    <View style={[
                        styles.colorBox,
                        { backgroundColor: color },
                        color === selectedColor && styles.selectedColorBox
                    ]} />
                </ScalePressable>
            )}
        </View >
    )
}