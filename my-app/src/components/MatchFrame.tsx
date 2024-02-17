import { Box } from '@mui/material';
import React, { useState } from 'react';



function MatchFrame() {

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
          Insert Frame Here for Mentor Match
        </Box>
    </div>
  );
}

export default MatchFrame;
