import { useConversationStore } from "../../store/conversationStore"
import { IconChevronLeft, IconEllipsisVertical, IconPaperAirplane } from "../svg"
import Message from "./Message"

const ChatSecction = () => {

	const conversation = useConversationStore(state => state.conversation)
	const closeConversation = useConversationStore(state => state.closeConversation)
	return (
		<div className="grid grid-rows-[80px_1fr_50px] px-2">
			<header className="flex justify-between items-center p-2">
				<button type="button" className="flex justify-center items-center w-8 h-8 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duratio-300" onClick={closeConversation}><IconChevronLeft /></button>
				<div className="flex items-center justify-between gap-4">
					<div>
						<img src={conversation?.imgUrl} className="w-8 h-8 rounded-full" />
					</div>

					<div>
						<span>{conversation?.idname}</span>
					</div>
				</div>
            
				<div>
					<button> 
						<IconEllipsisVertical />
					</button>
				</div>
            
			</header>

			<div className="flex flex-col gap-4 h-[calc(100dvh_-_140px)] overflow-x-hidden overflow-y-auto p-2">
				<Message position="left">
					loremdksldkmsldkmsdlkmlskdm sldkslkdmslkdm
				</Message>
				<Message>
					loremdksldkmsldkmsdlkmlskdm sldkslkdmslkdm
				</Message>
			</div>

			<div>
				<form className="h-full flex items-center px-4 py-2 gap-2">
					<input className="w-full h-10 outline-none ring-blue-500 focus:ring-2 hover:ring-2  rounded-xl px-2 transition-all duration-300 motion-reduce:transition-none" />
					<button type="button" className="w-10 h-10 p-2 flex justify-center items-center rounded-xl bg-blue-300 hover:bg-blue-500 hover:text-white transition-color duration-300 motion-reduce:transition-none"><IconPaperAirplane /></button>
				</form>
			</div>
		</div>
	)
}

export default ChatSecction