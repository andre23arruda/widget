import { FunctionComponent, useRef, useState } from 'react'
import { ChatTeardropDots } from 'phosphor-react-native'
import { TouchableOpacity, View } from 'react-native'

import BottomSheet from '@gorhom/bottom-sheet'
import Footer from '../Footer'
import FeedbackForm from '../FeedbackForm'
import FeedbackSuccess from '../FeedbackSuccess'
import SelectFeedback from '../SelectFeedback'

import { theme } from '../../styles/theme'
import { styles } from './styles'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { FeedbackType } from '../../utils/feedbackTypes'

export type StepType = 'selectFeedback' | 'form' | 'success'

function Widget() {
    const bottomSheetRef = useRef<BottomSheet>(null)
    const [step, setStep] = useState<StepType>('selectFeedback')
    const [selectedFeedback, setSelectedFeedback] = useState<FeedbackType|null>(null)

    function handleOpen() {
        bottomSheetRef.current?.expand()
    }

    const steps = {
        selectFeedback: (
            <SelectFeedback
                setSelectedFeedback={ setSelectedFeedback }
                setStep={ setStep }
            />
        ),
        form: selectedFeedback ? (
            <FeedbackForm
                selectedFeedback={ selectedFeedback }
                setStep={ setStep }
            />
            ) : <></>,
        success: <FeedbackSuccess finish={ () => setStep('selectFeedback') } />
    }

    return (
        <>
            <TouchableOpacity
                style={ styles.button }
                onPress={ handleOpen }
            >
                <ChatTeardropDots
                    size={ 24 }
                    weight="bold"
                    color={ theme.colors.text_on_brand_color}
                />
            </TouchableOpacity>

            <BottomSheet
                ref={ bottomSheetRef }
                snapPoints={[1, 280]}
                backgroundStyle={ styles.modal }
                handleIndicatorStyle={ styles.indicator }
            >
                <View>
                    { steps[step] }
                    <Footer />
                </View>
            </BottomSheet>
        </>
    )
}

export default gestureHandlerRootHOC(Widget) as FunctionComponent
