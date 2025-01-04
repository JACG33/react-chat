import { ReactNode } from "react"

type Message = {
	children: ReactNode,
	position?: string
	imgUser?: string 
}

const Message: React.FC<Message> = ({ children, position, imgUser }) => {
	const marginPoistion = position == "left" ? "ml-auto" : ""

	return (
		<div className="flex flex-col gap-4">
			<div className={`bg-white shadow-lg rounded-lg w-[80%] p-2 ${marginPoistion}`}>
				{children}
			</div>
			{position == "left" 
				? (
					<div className={`flex jusitfy-end items-center gap-2 ${marginPoistion}`}>
						<div>
							<small>03:35 PM</small>
						</div>
						<img className="rounded-full h-8 w-8" src={imgUser ? imgUser : "vite.svg"} />
					</div>
				) 
				: (<div className="flex jusitfy-start items-center gap-2">
					<img className="rounded-full h-8 w-8" src={imgUser ? imgUser : "vite.svg"} />
					<div>
						<small>03:35 PM</small>
					</div>
				</div>)
			}
		</div>
	)
}


export default Message