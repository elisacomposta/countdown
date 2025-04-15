import { StyleSheet } from 'react-native'
import { colors } from '@/utils/constants';

const styles = StyleSheet.create({
    fieldName: {
        fontSize: 20,
        color: colors.antracite,
        fontWeight: 'bold',
    },
    fieldContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    textInputBox: {
        borderWidth: 1,
        borderColor: colors.lightgrey,
        padding: 10,
        fontSize: 16,
        borderRadius: 16,
        minWidth: '80%',
        color: colors.antracite,
        flex: 1
    },
    colorBox: {
        width: 40,
        height: 40,
        borderRadius: 8,
        boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.25)",
    }
})

export default styles;