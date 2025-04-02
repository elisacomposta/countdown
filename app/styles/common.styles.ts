import { StyleSheet } from "react-native"
import { colors } from "@/utils/constants";

const commonStyles = StyleSheet.create({
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
    main: {
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
});

export default commonStyles;