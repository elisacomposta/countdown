import { StyleSheet } from "react-native"
import { colors } from "@/utils/constants";

const styles = StyleSheet.create({
    screen: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 100,
        marginBottom: 50,
    },
    eventContainer: {
        alignItems: "center",
    },
    archiveButton: {
        borderRadius: 50,
        backgroundColor: colors.transparent,
        padding: 10,
        margin: 10,
        height: 35,
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
    },
    archieveText: {
        fontSize: 14,
        color: colors.grey,
    }
})

export default styles;
