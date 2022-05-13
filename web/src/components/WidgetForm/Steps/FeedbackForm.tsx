// images
import { useState } from 'react'
import { feedbacksList, FeedbackType } from '..'
import ScreenshotButton from '../../ScreenshotButton'


type FeedbackFormType = {
    selectedFeedback: FeedbackType,
	setSelectedFeedback: React.Dispatch<React.SetStateAction<FeedbackType | null>>
    setFeedbackSent: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FeedbackForm({ selectedFeedback, setSelectedFeedback, setFeedbackSent }: FeedbackFormType) {
    const feedback = feedbacksList[selectedFeedback]
    const [value, setValue] = useState('')
    const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null)

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        const formData = {
            description: value,
            image: screenshotPreview,
            type: selectedFeedback
        }

        console.log(formData)
        setSelectedFeedback(null)
        setFeedbackSent(true)
    }

    function validateForm() {
        return value.trim().length > 0
    }

    return (
        <form className="my-4 w-full" onSubmit={ event => handleSubmit(event) }>
            <textarea
                className="min-w-[304px] w-full min-h-[112px] block p-1 text-sm placeholder-zinc-400 text-zinc-100 border-2 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 outline-none resize-none duration-200 ease-linear"
                name="feedback"
                id="feedback"
                placeholder={ feedback.placeholder }
                onChange={ event => setValue(event.target.value) }
                value={ value }
            />

            <footer className="flex gap-2 mt-2">
                <ScreenshotButton
                    screenshotPreview={ screenshotPreview }
                    setScreenshotPreview={ setScreenshotPreview }
                />

                <button
                    className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 duration-200 ease-linear outline-none focus:ring-violet-300 focus:ring-2 disabled:opacity-50 disabled:hover:bg-brand-500"
                    type="submit"
                    disabled={ !validateForm() }
                >
                    Enviar
                </button>
            </footer>

        </form>
    )
}
