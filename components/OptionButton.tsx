import { Text, TouchableOpacity } from "react-native";
import styles from "./OptionButton.styles";
import { useRouter } from "expo-router";

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
            onPress = () => console.log("Sort events");
            break;
        case "back":
            symbol = "←";
            onPress = () => router.back();
            break;
        case "save":
            symbol = "✓";
            break;
        case "other":
            symbol = "···";
            onPress = () => console.log("Action");
            break;
    }

    return (
        <TouchableOpacity style={styles.optionButton} onPress={onPress} disabled={disabled}>
            <Text style={[styles.createText, disabled ? styles.disabledText : null]}>{symbol}</Text>
        </TouchableOpacity>
    );
}

