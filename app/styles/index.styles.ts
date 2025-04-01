import { StyleSheet } from "react-native"
import { colors } from "@/utils/constants";

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: colors.darkgrey,
    },
    optionsContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 10
    },
    archiveButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 35,
        width: "50%",
        padding: 10,
        margin: 10,
        borderRadius: 35,
        backgroundColor: colors.transparent,
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
    },
    archieveText: {
        fontSize: 14,
        color: colors.grey,
    }
})

export default styles;
