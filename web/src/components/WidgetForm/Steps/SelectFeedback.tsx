// images
import React from 'react'
import { feedbacksList, FeedbackType } from '..'

type SelectFeedbackType = {
    setSelectedFeedback: React.Dispatch<React.SetStateAction<FeedbackType | null>>
}


export default function SelectFeedback({ setSelectedFeedback }: SelectFeedbackType) {

    return (
        <div className="flex py-10 gap-2 w-full">
            { Object.entries(feedbacksList).map(([key, feedback]) => (
                <button
                    key={ key }
                    onClick={ () => setSelectedFeedback(key as FeedbackType) }
                    className="bg-zinc-800 rounded-lg py-4 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent duration-100 ease-linear hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                    // className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 "
                >
                    <img src={ feedback.src } alt={ feedback.alt } title={ feedback.alt } />
                    <span className="mt-1">{ feedback.title }</span>
                </button>
            ))}
        </div>
    )
}
