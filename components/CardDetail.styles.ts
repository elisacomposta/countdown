import { StyleSheet } from "react-native";
import { colors } from "@/utils/constants";

const styles = StyleSheet.create({
    card: {
        padding: 50,
        borderRadius: 16,
        boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.25)",
        aspectRatio: 1,
        width: "100%",
        justifyContent: "space-between",
    },
    cardText: {
        color: colors.white,
        fontSize: 45,
        textAlign: "center",
    },
    cardTime: {
        color: colors.white,
        fontSize: 80,
        textAlign: "center",
    },
})

export default styles;