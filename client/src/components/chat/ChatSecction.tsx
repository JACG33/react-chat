import React, { useEffect, useState } from "react"
import { useConversationStore } from "../../store/conversationStore"
import { IconChevronLeft, IconEllipsisVertical, IconPaperAirplane } from "../svg"
import Message from "./Message"
import io from "socket.io-client"
import { useAuthProvider } from "../../hooks/useAuthProvider"

const socket = io()

type Messages = {
	user: string,
	message: string,
	time:string
}

const ChatSecction = () => {
	const { username } = useAuthProvider()
	const [message, setMessage] = useState("")
	const [messages, setMessages] = useState<Messages[] | []>([])

	const hdlMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value)
	}

	const hdlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const data = {
			username,
			message,
			time: new Date().getTime()
		}

		socket.emit("message", data)
		setMessage("")
	}

	useEffect(() => {
		socket.emit("join", { username })

		socket.on("res", (data) => {
			console.log(data)
			setMessages(data.messages)
		})

		socket.on("new message", (data) => {
			setMessages(prev => {
				return [...prev, data]
			})
		})

		return () => {
			socket.off("message");
			socket.off("join");
			socket.off("res");
			socket.off("new message");
			socket.off("out");
		};
	}, [])

	const closeConversation = useConversationStore(state => state.closeConversation)
	return (
		<div className="grid grid-rows-[80px_1fr_50px] px-2">
			<header className="flex justify-between items-center p-2">
				<button type="button" className="flex justify-center items-center w-8 h-8 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duratio-300" onClick={() => {
					socket.emit("out")
					closeConversation()
				}}><IconChevronLeft /></button>
				<div className="flex items-center justify-between gap-4">
					<div>
						<img src="vite.svg" className="w-8 h-8 rounded-full" />
					</div>

					<div>
						<span>Chat</span>
					</div>
				</div>
            
				<div>
					<button> 
						<IconEllipsisVertical />
					</button>
				</div>   
			</header>

			<div className="flex flex-col gap-4 h-[calc(100dvh_-_140px)] overflow-x-hidden overflow-y-auto p-2">
				{messages.length > 0 && messages.map(msg => {
					if (msg.user) {
						if (msg.user == username) {
							return (
								<Message key={Math.ceil(Math.random() * 99999)} position="left" time={msg.time}>
									{msg.message}
								</Message>
							)
						} else {
							return (
								<Message key={Math.ceil(Math.random() * 99999)} username={msg.user} time={msg.time}>
									{msg.message}
								</Message>
							)
						}
					}
				})}
			</div>

			<div>
				<form className="h-full flex items-center px-4 py-2 gap-2" onSubmit={hdlSubmit}>
					<input className="w-full h-10 outline-none ring-blue-500 focus:ring-2 hover:ring-2  rounded-xl px-2 transition-all duration-300 motion-reduce:transition-none" onInput={hdlMessage} value={message} />
					<button type="submit" className="w-10 h-10 p-2 flex justify-center items-center rounded-xl bg-blue-300 hover:bg-blue-500 hover:text-white transition-color duration-300 motion-reduce:transition-none"><IconPaperAirplane /></button>
				</form>
			</div>
		</div>
	)
}

export default ChatSecction