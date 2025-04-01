import { Text, TouchableOpacity } from "react-native";
import styles from "./OptionButton.styles";
import { useRouter } from "expo-router";

type action_type = "create" | "sort" | "back";

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
    }

    return (
        <TouchableOpacity style={styles.createButton} onPress={onPress}>
            <Text style={styles.createText}>{symbol}</Text>
        </TouchableOpacity>
    );
}

