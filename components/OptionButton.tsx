import { Text } from "react-native";
import { ScalePressable } from "./ScalePressable";
import styles from "./OptionButton.styles";
import { useRouter } from "expo-router";
import { ActionType } from "@/types/interfaces";

export function OptionButton({ actionType, disabled = false, onPress }: { actionType: ActionType, disabled?: boolean, onPress?: () => void }) {
    const router = useRouter();

    let symbol = "";
    switch (actionType) {
        case ActionType.create:
            symbol = "+";
            onPress = () => router.push("/create");
            break;
        case ActionType.sort:
            symbol = "⮃";
            break;
        case ActionType.back:
            symbol = "←";
            if (!onPress) {
                onPress = () => router.back();
            }
            break;
        case ActionType.save:
            symbol = "✓";
            break;
        case ActionType.other:
            symbol = "···";
            break;
    }

    return (
        <ScalePressable style={styles.optionButton} onPress={onPress} disabled={disabled}>
            <Text style={[styles.createText, disabled ? styles.disabledText : null]}>{symbol}</Text>
        </ScalePressable>
    );
}

