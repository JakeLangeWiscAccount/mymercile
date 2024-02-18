import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

  const navigate = useNavigate();

  

  //create user name and password

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const profileFormSubmitHandler = async(e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log("Submitted:", {
       username, password
    });

    navigate("/home");

  };


  return (
    <div>
      <form onSubmit={profileFormSubmitHandler}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Render elements vertically
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
            Please Login
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label>
            Password:
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
          </Box>
          
          </form>
    </div>
  );
};

export default LoginPage;
