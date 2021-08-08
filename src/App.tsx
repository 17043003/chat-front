import React, { useState } from "react";
import "./App.css";

import webSocket from "./components/WebSocket";

function App(): JSX.Element {
  const [messages, setMessages] = useState<string[]>([]);

  webSocket.onmessage = (e) => {
    setMessages([...messages, e.data]);
  };

  const messageItems = messages.map((message, index) => {
    return <li key={index}>{message}</li>;
  });

  return (
    <div className="App">
      <header className="App-header">Chat</header>
      {messages.length ? (
        <ul>{messageItems}</ul>
      ) : (
        <p>{"メッセージはありません"}</p>
      )}
    </div>
  );
}

export default App;
