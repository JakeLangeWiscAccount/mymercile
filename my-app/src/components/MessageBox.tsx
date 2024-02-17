import { Box } from '@mui/material';
import React, { useState } from 'react';



function MessageBox() {

  return (
    <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Render elements vertically
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Insert Chat Box Here for Direct Messages
        </Box>
    </div>
  );
}

export default MessageBox;
