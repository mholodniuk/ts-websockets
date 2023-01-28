import WebSocket, { RawData } from "ws";

const port: number = 1234;
const ws = new WebSocket(`ws://localhost:${port}`);

ws.on('open', () => {
  console.log(`[Client] connected`)
  ws.send(`Hi, this is a WebSocketClient`);
});

ws.on('message', (data: RawData) => {
  console.log(`Received message: ${data}`);
});