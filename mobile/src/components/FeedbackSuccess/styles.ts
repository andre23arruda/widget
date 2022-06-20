import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'


export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    successContainer: {
        marginTop: 32,
        marginBottom: 24,
        marginHorizontal: 62,
        alignItems: 'center',
    },

    image: {
        marginBottom: 8,
    },

    text: {
        fontSize: 20,
        color: theme.colors.text_primary,
        fontFamily: 'medium',
    },

    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.surface_secondary,
        borderRadius: 4,
        height: 44,
        marginBottom: 44,
    },

    buttonText: {
        color: theme.colors.text_primary,
        fontFamily: 'medium',
    },
})
