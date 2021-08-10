import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid"

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
    <Grid container>
        <Grid item xs={11}>
      <TextField value={message} onChange={(e) => setMessage(e.target.value)} autoFocus fullWidth />
      </Grid>
      <Grid item xs={1}>
      <IconButton
        color="primary"
        component="span"
        onClick={() => clickHandler()}
      >
        <SendIcon />
      </IconButton>
      </Grid>
    </Grid>
  );
};

export default messageForm;
