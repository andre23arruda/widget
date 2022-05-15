import BugImg from '../assets/bug.svg'
import IdeaImg from '../assets/idea.svg'
import ThoughtImg from '../assets/thought.svg'

export const feedbackTypes = {
	BUG: {
		title: 'Problema',
		image: <BugImg width="100%" height="100%" />,
		placeholder: 'Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...',
	},
	IDEA: {
		title: 'Ideia',
		image: <IdeaImg width="100%" height="100%" />,
		placeholder: 'Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!',
	},
	OTHER: {
		title: 'Outro',
		image: <ThoughtImg width="100%" height="100%" />,
		placeholder: 'Queremos te ouvir. O que você gostaria de nos dizer?',
	},
};

export type FeedbackType = keyof typeof feedbackTypes;
