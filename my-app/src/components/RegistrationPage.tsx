import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const RegistrationPage = () => {

  const navigate = useNavigate();

  

  //create user name and password

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [registrationFailed, setRegistrationFailed] = useState<boolean>(false);

  const profileFormSubmitHandler = async(e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log("Submitted:", {
       username, password
    });

    if (confirmedPassword == password){
      navigate("/home");
    }else{
      setRegistrationFailed(true);
      setUsername("");
      setPassword("");
      setConfirmedPassword("");
    }
    
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
          <label>
            Confirm Password:
            <input
              type="text"
              value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
          {registrationFailed && <div>Registration Failed! Try Again!</div>}
          </Box>
          
          </form>
    </div>
  );
};

export default RegistrationPage;
