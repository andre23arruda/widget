import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'


export const styles = StyleSheet.create({
    textContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: theme.colors.text_secondary,
        fontSize: 12,
        fontFamily: 'medium',
    },
})
