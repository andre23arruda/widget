import { Text, View } from 'react-native'
import { FeedbackType, feedbackTypes } from '../../utils/feedbackTypes'
import { StepType } from '../Widget'
import FeedbackOption from '../FeedbackOption'

import { styles } from './styles'

interface Props {
    setSelectedFeedback: (key: FeedbackType) => void,
    setStep: (step: StepType) => void,
}

export default function SelectFeedback({ setSelectedFeedback, setStep }: Props) {

    function handleSelectFeedback(key: FeedbackType) {
        setSelectedFeedback(key)
        setStep('form')
    }

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Deixe seu feedback
            </Text>

            <View style={ styles.options }>
                { Object.entries(feedbackTypes).map(([key, feedback]) => (
                    <FeedbackOption
                        onPress={ () => handleSelectFeedback(key as FeedbackType)}
                        key={ key }
                        {...feedback}
                    />
                ))}
            </View>
        </View>
    )
}
