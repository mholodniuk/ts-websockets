import { RawData, WebSocketServer, WebSocket } from 'ws';

const port: number = 1234;
const server = new WebSocketServer({
  port: port
});

server.on('connection', (socket: WebSocket) => {
  console.log(`new connection: ${socket}`);

  socket.on('message', (data: RawData) => {
    console.log(`Received message from client: ${data}`);
  });

  socket.send(`hello from WebSocketServer! 😃`);
});

console.log(`Listening at port: ${port}...`);