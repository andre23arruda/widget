import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'


export const styles = StyleSheet.create({
    button: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: theme.colors.brand,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 36,
        right: 24,
    },

    modal: {
        backgroundColor: theme.colors.surface_primary,
        paddingBottom: 16
    },

    indicator: {
        backgroundColor: theme.colors.text_primary,
        width: 56,
    },

})
