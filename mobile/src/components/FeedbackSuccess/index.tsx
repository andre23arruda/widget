import {
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import { styles } from './styles'
import { StepType } from '../Widget'
import SuccessImg from '../../assets/success.svg'


interface Props {
    finish: () => void,
}

export default function FeedbackSuccess({ finish }: Props) {
    return (
        <View style={ styles.container }>
            <View style={ styles.successContainer }>
                <SuccessImg
                    width={ 48 }
                    height={ 48 }
                    style={ styles.image }
                />

                <Text style={ styles.text }>
                    Agradecemos o feedback!
                </Text>
            </View>

            <TouchableOpacity
                style={ styles.button }
                onPress={ finish }
            >
                <Text style={ styles.buttonText }>
                    Quero enviar outro
                </Text>
            </TouchableOpacity>
        </View>


    )
}
