import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";

import { useState } from "react";

const messageForm = (): JSX.Element => {
  const [message, setMessage] = useState("");

  return (
    <>
      <TextField value={message} onChange={(e) => setMessage(e.target.value)} />
      <IconButton
        color="primary"
        component="span"
        onClick={() => console.log(message)}
      >
        <SendIcon />
      </IconButton>
    </>
  );
};

export default messageForm;
