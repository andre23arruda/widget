import { ArrowLeft } from 'phosphor-react'
import { FeedbackType } from './WidgetForm'

type BackButtonType = {
	setSelectedFeedback: React.Dispatch<React.SetStateAction<FeedbackType | null>>
}


export default function BackButton({ setSelectedFeedback }: BackButtonType) {

    return (
		<button
			onClick={ () => setSelectedFeedback(null) }
			className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100 duration-200 ease-linear"
			title="Voltar"
		>
			<ArrowLeft weight="bold" className="w-4 h-4" />
		</button>
    )
}
