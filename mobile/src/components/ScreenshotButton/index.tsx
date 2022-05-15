import {
    Image,
    TouchableOpacity,
} from 'react-native'

import { Camera, Trash } from 'phosphor-react-native'
import { captureScreen } from 'react-native-view-shot'

import { styles } from './styles'
import { theme } from '../../styles/theme'

type Props = {
	screenshotPreview: string | null,
	setScreenshotPreview: React.Dispatch<React.SetStateAction<string | null>>
}

export default function ScreenshotButton({ screenshotPreview, setScreenshotPreview }: Props) {

    function handleScreenshot() {
        if (screenshotPreview) {
            setScreenshotPreview(null)
            return
        }
        captureScreen({ format: 'jpg', quality: 0.8 })
        .then(uri => setScreenshotPreview(uri))
        .catch(error => console.error(error))
    }

    return (
        <TouchableOpacity
            style={ styles.buttonScreenshot }
            onPress={ handleScreenshot }
        >
            { screenshotPreview ? (
                <>
                    <Image
                        source={{ uri: screenshotPreview }}
                        style={ styles.screenShotContainer }
                    />

                    <Trash
                        size={ 16 }
                        weight="bold"
                        style={ styles.trashIcon }
                        color={ theme.colors.text_secondary }
                    />
                </>
            ) : (
                <Camera
                    size={ 24 }
                    weight="bold"
                    color={ theme.colors.text_secondary }
                />
            )}
        </TouchableOpacity>
    )
}
