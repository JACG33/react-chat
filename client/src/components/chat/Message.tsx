import { ReactNode } from "react"

type Message = {
	children: ReactNode
	position?: string
	imgUser?: string
	username?: string
	time: string
}

const Message: React.FC<Message> = ({ children, position, imgUser, username, time }) => {
	const marginPoistion = position == "left" ? "ml-auto" : ""

	return (
		<div className="flex flex-col gap-4">
			<div 
				className={`flex flex-col bg-white shadow-lg rounded-lg w-[80%] p-2 ${marginPoistion}`}
			>
				{
					username && <small className="font-bold">{username}</small>
				}
				{children}
			</div>
			{position == "left" 
				? (
					<div className={`flex jusitfy-end items-center gap-2 ${marginPoistion}`}>
						<div>
							<small>{new Date(time).toLocaleTimeString()}</small>
						</div>
						<img className="rounded-full h-8 w-8" src={imgUser ? imgUser : "vite.svg"} />
					</div>
				) 
				: (<div className="flex jusitfy-start items-center gap-2">
					<img className="rounded-full h-8 w-8" src={imgUser ? imgUser : "vite.svg"} />
					<div>
						<small>{new Date(time).toLocaleTimeString()}</small>
					</div>
				</div>)
			}
		</div>
	)
}


export default Message