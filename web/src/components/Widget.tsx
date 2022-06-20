import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import WidgetForm from './WidgetForm';

export default function Widget() {

    return (
		<Popover className="absolute bottom-5 right-5 flex flex-col items-end">
			<Popover.Panel>
				<WidgetForm />
			</Popover.Panel>

			<Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group outline-none focus:ring-violet-300 focus:ring-2">
				<ChatTeardropDots className="w-6 h-6" />

				<span className="w-0 overflow-hidden group-hover:w-20 duration-200 ease-linear">
					Feedback
				</span>
			</Popover.Button>
		</Popover>
    );
}
