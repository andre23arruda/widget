import html2canvas from 'html2canvas';
import { useState } from 'react'
import { Camera, Trash } from 'phosphor-react'
import Loading from './Loading'

type ScreenshotButtonType = {
	screenshotPreview: string | null,
	setScreenshotPreview: React.Dispatch<React.SetStateAction<string | null>>
}

export default function ScreenshotButton({ screenshotPreview, setScreenshotPreview }: ScreenshotButtonType) {

	const [isLoading, setIsLoading] = useState(false)

	async function handleScreenshot() {
		setIsLoading(true)
		const canvas = await html2canvas(document.querySelector('html')!) // it can't be null
		const base64image = canvas.toDataURL('image/png')
		setScreenshotPreview(base64image)
		setIsLoading(false)
	}

	if (screenshotPreview) {
		return (
			<button
				className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400  transition-colors"
				type="button"
				onClick={ () => setScreenshotPreview(null) }
				style={{ background: `url(${ screenshotPreview })` }}
			>
				<Trash weight="fill" />
			</button>

		)
	}

    return (
		<button
			className="p-2 bg-zinc-800 rounded-md border-transparent transition-colors hover:bg-zinc-700 outline-none focus:ring-zinc-600 focus:ring-2"
			type="button"
			onClick={ handleScreenshot }
			disabled={ isLoading }
		>
			{ isLoading ? (
				<Loading />
			) :
				<Camera className="w-6 h-6" />
			}
		</button>

    )
}
