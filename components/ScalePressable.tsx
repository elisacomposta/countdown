import { Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';

export function ScalePressable({ children, onPress, onLongPress, style, disabled, disableFeedback }: { children: React.ReactNode, onPress?: () => void, onLongPress?: () => void, style?: any, disabled?: boolean, disableFeedback?: boolean }) {

    const handleOnPress = () => {
        if (onPress) {
            onPress();
            if (!disableFeedback) {
                Haptics.impactAsync();
            }
        }
    }

    const handleOnLongPress = () => {
        if (onLongPress) {
            onLongPress();
            if (!disableFeedback) {
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            }
        }
    }

    return (
        <Pressable
            style={({ pressed }) => [style, pressed && { transform: [{ scale: 0.98 }] }]}
            onPress={handleOnPress}
            onLongPress={handleOnLongPress}
            disabled={disabled}
        >
            {children}
        </Pressable>
    );
}