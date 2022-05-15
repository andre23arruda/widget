import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'


export const styles = StyleSheet.create({
    buttonScreenshot: {
        marginRight: 8,
        backgroundColor: theme.colors.surface_secondary,
        borderRadius: 4,
        height: 44,
        width: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },

    screenShotContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 4,
    },

    trashIcon: {
        position: 'absolute',
        bottom: 2,
        right: 2,
    }
})
