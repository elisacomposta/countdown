import { Text, TouchableOpacity } from "react-native";
import styles from "./OptionButton.styles";
import { useRouter } from "expo-router";

type action_type = "create" | "sort" | "back" | "save" | "other";

export function OptionButton({ action }: { action: action_type }) {
    const router = useRouter();

    let symbol = "";
    let onPress = () => console.log("Option button pressed");
    switch (action) {
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
            onPress = () => console.log("Saved");
            break;
        case "other":
            symbol = "···";
            onPress = () => console.log("Action");
            break;
    }

    return (
        <TouchableOpacity style={styles.optionButton} onPress={onPress}>
            <Text style={styles.createText}>{symbol}</Text>
        </TouchableOpacity>
    );
}

