import { StyleSheet } from "react-native"
import { colors } from "@/utils/constants";

const styles = StyleSheet.create({
    createButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 35,
        height: 50,
        width: 50,
        backgroundColor: colors.white,
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
    },
    createText: {
        fontSize: 30,
        lineHeight: 30,
        color: colors.darkgrey,
    },
})

export default styles;