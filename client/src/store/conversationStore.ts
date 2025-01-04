import { create } from "zustand";

type Conversation = {
	idname: string,
	imgUrl: string,
}


interface ConversationStore {
	status: boolean
	conversation: Conversation | null
	setConversation: (state: { name: string, url: string }) => void
	closeConversation: () => void
}

export const useConversationStore = create<ConversationStore>((set) => {
	return {
		status: false,
		conversation: null,
		setConversation: (state) => { 
			set({
				status: true,
				conversation: {
					idname: state?.name,
					imgUrl: state?.url
				}
			})
		},
		closeConversation: (() => {
			set({ status: false, conversation: null })
		})
	}
})