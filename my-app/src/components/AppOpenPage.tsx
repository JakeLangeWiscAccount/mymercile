import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AppOpenPage = () => {
  const navigate = useNavigate();

  const loginClick = () => {
    navigate("/login");
  };

  const registrationClick = () => {
    navigate("/registration");
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
      <div style={{marginBottom: "8px"}}>
        <h1>MyMercile</h1>
      </div>
      <div style={{ marginBottom: "8px", marginTop: "8px" }}>
        <Button onClick={loginClick} variant="contained" color="primary">
          Login
        </Button>
      </div>
      <div style={{ marginTop: "8px" }}>
        <Button onClick={registrationClick} variant="contained" color="primary">
          Register
        </Button>
      </div>
    </Box>
  );
};

export default AppOpenPage;
