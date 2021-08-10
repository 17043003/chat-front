import React, { useState } from "react";
import "./App.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import webSocket from "./components/WebSocket";

function App(): JSX.Element {
  const [messages, setMessages] = useState<string[]>([]);

  webSocket.onmessage = (e) => {
    setMessages([...messages, e.data]);
  };

  const messageItems = messages.map((message, index) => {
    return (
      <CardContent className="message-item" key={index}>
        <Typography className="user-name" color="textSecondary" gutterBottom>
          user name
        </Typography>
        <Typography className="message-content" variant="h6" component="h2">
          {message}
        </Typography>
      </CardContent>
    );
  });

  return (
    <div className="App">
      <header className="App-header">Chat</header>
      {messages.length ? (
        <Card>{messageItems}</Card>
      ) : (
        <p>{"メッセージはありません"}</p>
      )}
    </div>
  );
}

export default App;
