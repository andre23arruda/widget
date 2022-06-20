import { useState } from 'react'

// components
import Header from '../Header'
import SelectFeedback from './Steps/SelectFeedback'

// images
import bugImage from '../../assets/images/bug.svg'
import ideaImage from '../../assets/images/idea.svg'
import thoughtImage from '../../assets/images/thought.svg'
import FeedbackForm from './Steps/FeedbackForm'
import FeedbackSuccess from './Steps/FeedbackSuccess'

export const feedbacksList = {
	BUG: {
		src: bugImage,
		title: 'Problema',
		alt: 'Imagem de um bug',
		placeholder: 'Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
	},
	IDEA: {
		src: ideaImage,
		title: 'Ideia',
		alt: 'Imagem de uma lâmpada',
		placeholder: 'Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!'
	},
	OTHER: {
		src: thoughtImage,
		title: 'Outro',
		alt: 'Imagem de uma nuvem de pensamento',
		placeholder: 'Queremos te ouvir. O que você gostaria de nos dizer?'
	},
}

export type FeedbackType = keyof typeof feedbacksList

export default function WidgetForm() {

	const [selectedFeedback, setSelectedFeedback] = useState<FeedbackType | null>(null)
	const [feedbackSent, setFeedbackSent] = useState(false)

    return (
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			<Header
				feedbackSent={ feedbackSent }
				selectedFeedback={ selectedFeedback }
				setSelectedFeedback={ setSelectedFeedback }
			/>

			{ feedbackSent ? (
				<FeedbackSuccess setFeedbackSent={ setFeedbackSent } />
			) : (
				<>
					{ selectedFeedback ? (
						<FeedbackForm
							setSelectedFeedback={ setSelectedFeedback }
							selectedFeedback={ selectedFeedback }
							setFeedbackSent={ setFeedbackSent }
						/>
					) : (
						<SelectFeedback setSelectedFeedback={ setSelectedFeedback } />
					)}
				</>
			)}

			<footer className="text-xs text-neutral-400">
				Feito com ❤️ por <a className="hover:underline" href="#">A²rruda</a>
			</footer>
		</div>

    );
}
