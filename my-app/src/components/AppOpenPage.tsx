import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AppOpenPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Render elements vertically
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
    <div style={{ marginBottom: "8px" }}>
      <Button variant="contained" color="primary">
        Login
      </Button>
      </div>
      <div style={{ marginTop: "8px" }}>
      <Button variant="contained" color="primary">
        Register
      </Button>
    </div>
    </Box>
  );
};

export default AppOpenPage;
