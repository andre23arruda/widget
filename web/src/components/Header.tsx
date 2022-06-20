import BackButton from './BackButton'
import CloseButton from './CloseButton'
import { feedbacksList, FeedbackType } from './WidgetForm'

type HeaderType = {
	feedbackSent: boolean,
	selectedFeedback: FeedbackType | null,
	setSelectedFeedback: React.Dispatch<React.SetStateAction<FeedbackType | null>>
}

export default function Header({ feedbackSent, selectedFeedback, setSelectedFeedback }: HeaderType) {
	const feedback = selectedFeedback ? feedbacksList[selectedFeedback] : null

    return (
		<header>
			{ feedback ? (
				<>
					<BackButton setSelectedFeedback={ setSelectedFeedback }/>

					<span className="flex items-center gap-2 leading-5 text-xl">
						<img className="w-6 h-6"  src={ feedback.src } alt={ feedback.alt } />

						{ feedback.title }
					</span>
				</>
			) : (
				<span className="text-xl leading-5">
					{ feedbackSent ? '' : 'Deixe seu Feedback' }
				</span>
			)}

			<CloseButton />
		</header>
    )
}
