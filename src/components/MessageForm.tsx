import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";

import { useState } from "react";

import socket from "./WebSocket";

const messageForm = (): JSX.Element => {
  const [message, setMessage] = useState("");

  const clickHandler = () => {
    if(message.length === 0) return;
    
    socket.send(message);
    setMessage("");
  };

  return (
    <>
      <TextField value={message} onChange={(e) => setMessage(e.target.value)} />
      <IconButton
        color="primary"
        component="span"
        onClick={() => clickHandler()}
      >
        <SendIcon />
      </IconButton>
    </>
  );
};

export default messageForm;
