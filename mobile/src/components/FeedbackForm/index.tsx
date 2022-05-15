import { useState } from 'react'
import {
    TextInput,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator
} from 'react-native'

import { ArrowLeft } from 'phosphor-react-native'
import * as FileSystem from 'expo-file-system'
import { FeedbackType, feedbackTypes } from '../../utils/feedbackTypes'

import ScreenshotButton from '../ScreenshotButton'
import { StepType } from '../Widget'
import { postApi } from '../../services/api'

import { theme } from '../../styles/theme'
import { styles } from './styles'

interface Props {
    selectedFeedback: FeedbackType,
    setStep: (step: StepType) => void,
}

export default function Form({ selectedFeedback, setStep }: Props) {
    const feedback = feedbackTypes[selectedFeedback]
    const [description, setDescription] = useState('')
    const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit() {
        setIsLoading(true)
        const screenshotBase64 = screenshotPreview && await FileSystem.readAsStringAsync(screenshotPreview, {encoding: 'base64'})
        const screenshotData = screenshotPreview && `data:image/png;base64, ${ screenshotBase64 }`

        const formData = {
            description,
            image: screenshotData || '',
            type: selectedFeedback
        }

        console.log(formData)

        await postApi('feedbacks/', formData)

        setStep('success')
        setIsLoading(false)
    }

    function validateForm() {
        return description.trim().length > 0
    }

    return (
        <View style={ styles.form }>
            <View style={ styles.header }>
                <TouchableOpacity
                    onPress={ () => setStep('selectFeedback') }
                >
                    <ArrowLeft
                        size={ 24 }
                        weight="bold"
                        color={ theme.colors.text_secondary }
                    />
                </TouchableOpacity>

                <View style={ styles.titleContainer }>
                    <View style={ styles.imageContainer }>
                        { feedback.image }
                    </View>

                    <Text style={ styles.title }>
                        { feedback.title }
                    </Text>
                </View>
            </View>

            <TextInput
                multiline
                onChangeText={ setDescription }
                placeholder={ feedback.placeholder }
                placeholderTextColor={ theme.colors.text_secondary }
                style={ styles.descriptionInput }
                defaultValue={ description }
            />

            <View style={ styles.buttonsContainer }>
                <ScreenshotButton
                    screenshotPreview={ screenshotPreview }
                    setScreenshotPreview={ setScreenshotPreview }
                />

                <TouchableOpacity
                    style={[styles.buttonSubmit, !validateForm() ? styles.buttonDisabled : {}]}
                    onPress={ handleSubmit }
                    disabled={ !validateForm() || isLoading }
                >
                    { isLoading ? (
                        <ActivityIndicator color={ theme.colors.text_on_brand_color }/>
                    ) : (
                        <Text style={ styles.submitText }>
                            Enviar feedback
                        </Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    )
}
