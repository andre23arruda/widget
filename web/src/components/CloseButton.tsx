import { X } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export default function CloseButton() {

    return (
		<Popover.Button
			className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100 duration-200 ease-linear"
			title="Fechar"
		>
			<X weight="bold" className="w-4 h-4" />
		</Popover.Button>
    )
}
