import { StyleSheet } from "react-native";
import { colors } from "@/utils/constants";

const styles = StyleSheet.create({
    colorPickerContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    colorBox: {
        width: 30,
        height: 30,
        borderRadius: 8,
        boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.25)",
    },
    selectedColorBox: {
        width: 40,
        height: 40,
    }
});

export default styles;