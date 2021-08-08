const ip = "127.0.0.1";
const port = "8080";

const socket = new WebSocket(`ws://${ip}:${port}/chat`);
socket.onopen = () => console.log("opened.");
socket.onclose = () => console.log("closed.");

export default socket;
