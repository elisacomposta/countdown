import { StyleSheet } from "react-native"
import { colors } from "@/utils/constants";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 20,
    },
    eventsContainer: {
        display: "flex",
        alignItems: "center",
    },
    footer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBlockColor: colors.celeste,
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: colors.darkgrey,
    },
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
