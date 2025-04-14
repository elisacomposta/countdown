import { Text } from "react-native";
import { ScalePressable } from "./ScalePressable";
import styles from "./OptionButton.styles";
import { useRouter } from "expo-router";
import { printAllStorage } from "@/utils/storage";

type action_type = "create" | "sort" | "back" | "save" | "other";

export function OptionButton({ actionType, disabled = false, onPress }: { actionType: action_type, disabled?: boolean, onPress?: () => void }) {
    const router = useRouter();

    let symbol = "";
    switch (actionType) {
        case "create":
            symbol = "+";
            onPress = () => router.push("/create");
            break;
        case "sort":
            symbol = "⮃";
            onPress = () => printAllStorage();
            break;
        case "back":
            symbol = "←";
            if (!onPress) {
                onPress = () => router.back();
            }
            break;
        case "save":
            symbol = "✓";
            break;
        case "other":
            symbol = "···";
            break;
    }

    return (
        <ScalePressable style={styles.optionButton} onPress={onPress} disabled={disabled}>
            <Text style={[styles.createText, disabled ? styles.disabledText : null]}>{symbol}</Text>
        </ScalePressable>
    );
}

