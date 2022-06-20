import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'


export const styles = StyleSheet.create({
    form: {
        paddingHorizontal: 24,
        alignItems: 'center',
    },

    header: {
        flexDirection: 'row',
        marginTop: 4,
        marginBottom: 16,
    },

    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 24
    },

    title: {
        fontSize: 20,
        color: theme.colors.text_primary,
        fontFamily: 'medium',
        marginLeft: 5,
    },

    imageContainer: {
        width: 24,
        height: 24,
    },

    descriptionInput: {
        width: '100%',
        height: 112,
        padding: 12,
        marginBottom: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.colors.stroke,
        color: theme.colors.text_primary,
        fontFamily: 'regular',
        textAlignVertical: 'top',
    },

    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },

    buttonSubmit: {
        flex: 1,
        padding: 12,
        backgroundColor: theme.colors.brand,
        alignItems: 'center',
        borderRadius: 4,
        height: 44,
    },

    buttonDisabled: {
        backgroundColor: theme.colors.text_secondary,
    },

    submitText: {
        color: theme.colors.text_on_brand_color,
        fontFamily: 'medium',
    }
})
