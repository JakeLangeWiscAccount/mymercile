import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

  const navigate = useNavigate();

  

  //create user name and password

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginFailed, setLoginFailed] = useState<boolean>(false);

  const postURL = "//localhost:3001/login";

  const profileFormSubmitHandler = async(e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log("Submitted:", {
       username, password
    });

    try {
      console.log(username);
      console.log(password);
      const response = await axios.post(postURL, {
        //add fields here in correct order
        email: username,
        password: password
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      console.log(response);
      console.log('Response:', response.data);
      navigate("/home");
      // Handle response if needed
    } catch (error) {
      console.error('Error:', error);
      // Handle error if needed
      setUsername("");
      setPassword("");
      setLoginFailed(true);
    }

    // if login success (get response matches login variables), proceed
    //navigate("/home");

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
          {loginFailed && <div>Login Failed! Try Again!</div>}
          </Box>
          
          </form>
    </div>
  );
};

export default LoginPage;
