import { Box } from "@mui/material";
import React, { useState } from "react";


function MessageBox(props: any) {

  return (
        <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh" // Set minimum height to fill the viewport
    >
      <textarea
        className="chat-box-input"
        placeholder="Type your message..."
        value={props.value}
        onChange={props.onChange}
      />
      <button className="send-button" onClick={props.onSubmit}>
        Send
      </button>
      </Box>

  );
}

export default MessageBox;
