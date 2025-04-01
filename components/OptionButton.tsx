import { Text, TouchableOpacity } from "react-native";
import styles from "./OptionButton.styles";
import { useRouter } from "expo-router";

export function OptionButton({ symbol }: { symbol?: string }) {
    const router = useRouter();

    return (
        <TouchableOpacity style={styles.createButton} onPress={() => router.push('/create')}>
            <Text style={styles.createText}>{symbol}</Text>
        </TouchableOpacity>
    );
}

