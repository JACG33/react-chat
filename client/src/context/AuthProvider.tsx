import React, { createContext, ReactNode, useEffect, useState } from "react";

type AuthContex = {
	username: string,
	hdlUser: (uname: string) => void,
	hdlUserOut: () => void
}

export const AuthContex = createContext<AuthContex>({
	username: "",
	hdlUser: () => {},
	hdlUserOut: () => {}
})


type AuthProvider = {
	children: ReactNode
}

export const AuthProvider: React.FC<AuthProvider> = ({ children }) => {
	const [username, setUsername] = useState("")

	const hdlUser = (uname: string) => {
		window.localStorage.setItem("chatuser", uname)
		setUsername(uname)
	}

	const hdlUserOut = () => {
		window.localStorage.removeItem("chatuser")
		setUsername("")
	}


	useEffect(() => {
		const chatuser = window.localStorage.getItem("chatuser")
		if (chatuser) setUsername(chatuser)
	}, [])



	return <AuthContex.Provider value={{
		username,
		hdlUser,
		hdlUserOut
	}}>
		{children}
	</AuthContex.Provider>


}