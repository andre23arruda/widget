import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'


export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        marginTop: 4,
        marginBottom: 36,
        fontFamily: 'medium',
        color: theme.colors.text_primary,
    },

    options: {
        width: '100%',
        marginBottom: 48,
        flexDirection: 'row',
        justifyContent: 'center',
    },
})
