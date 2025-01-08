import { Server } from "socket.io";
import express from "express"
import { createServer } from "node:http"
import cors from "cors"
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const app = express()

const PORT = process.env.APP_PORT || 3000

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const httpServer = new createServer(app)
const io = new Server(httpServer, { cors: { origin: "*" } })

let chat = "chat"
let messages = []

app.use([
	"/",
	"/chat"
], express.static(join(__dirname, "./dist/")))

app.get("*", (req, res) => {
	res.sendFile(join(__dirname, "./dist/index.html"))
})

io.on("connection", (socket) => {

	// Salir del chat
	socket.on("out", () => {
		console.log("********* leave *********")
		socket.leave(chat)
	});

	// Unirse al chat
	socket.on("join", (data) => {
		console.log("********* to join *********", data)
		socket.join(chat)
		io.to(chat).emit("res", {
			msg: {
				username: data.username,
				message: "En el chat"
			},
			messages
		})
	})

	// Enviar mensaje
	socket.on("message", (data) => {
		console.log("********* new message *********")
		let newMsg = {
			user: data.username,
			message: data.message,
			time: data.time
		}
		messages.push(newMsg)

		io.to(chat).emit("new message", newMsg)
	})

})

httpServer.listen(PORT, (res, req) => {
	console.log(`Server up, listen on port ${PORT}`)
})

