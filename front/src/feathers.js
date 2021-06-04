// Modules
import feathers from '@feathersjs/client'
import io from 'socket.io-client'

// Socket.io is exposed as the `io` global
const socket = io('http://localhost:3031')

const options = {
	transports: ['websocket'],
	pingTimeout: 1000,
	pingInterval: 5000,
	reconnection: true,
	reconnectionDelay: 3000,
	reconnectionAttempts: 20,
	forceNew: true
}

// @feathersjs/client is exposed as the `feathers` global
const api = feathers().configure(feathers.socketio(socket), options)

export default api
