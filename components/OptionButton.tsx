import { Text, TouchableOpacity } from "react-native";
import styles from "./OptionButton.styles";

export function OptionButton({ symbol }: { symbol?: string }) {
    return (
        <TouchableOpacity style={styles.createButton} onPress={() => console.log("Create new")}>
            <Text style={styles.createText}>{symbol}</Text>
        </TouchableOpacity>
    );
}

