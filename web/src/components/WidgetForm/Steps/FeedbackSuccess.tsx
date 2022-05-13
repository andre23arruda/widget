// images
import React from 'react'
import { FeedbackType } from '..'

import successImage from '../../../assets/images/success.svg'

type SelectFeedbackType = {
    setFeedbackSent: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FeedbackSuccess({ setFeedbackSent }: SelectFeedbackType) {

    function handleNewFeedback() {
        setFeedbackSent(false)
    }

    return (
        <div className="flex flex-col py-10 min-w-[304px] items-center justify-center">
            <img className="w-10 h-10" src={ successImage } alt="Imagem com check de sucesso" title="Sucesso" />

            <span className="text-xl mt-2">
                Agradecemos o feedback!
            </span>

            <button
                onClick={ handleNewFeedback }
                className="bg-zinc-800 rounded-md py-2 px-6 mt-5 border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors outline-none focus:ring-zinc-600 focus:ring-2"
            >
                Quero enviar outro
            </button>
        </div>
    )
}
