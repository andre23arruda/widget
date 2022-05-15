import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from 'react-native'

import { styles } from './styles'

interface Props extends TouchableOpacityProps {
    title: string,
    image: string | JSX.Element,
    onPress: () => void,
}

export default function FeedbackOption({ title, image: SVGImage, onPress, ...props}: Props) {
    return (
        <TouchableOpacity
            style={ styles.container }
            onPress={ onPress }
            {...props}
        >
            <View style={ styles.imageContainer }>
                { SVGImage }
            </View>

            <Text style={ styles.text }>
                { title }
            </Text>
        </TouchableOpacity>
    )
}
