import { Text, View } from 'react-native'

import { styles } from './styles'

export default function Footer() {
    return (
        <View style={ styles.textContainer }>
            <Text style={ styles.text }>
                Feito com ❤️ por A²rruda
            </Text>
        </View>
    )
}
