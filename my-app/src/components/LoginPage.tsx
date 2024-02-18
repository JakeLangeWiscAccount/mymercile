import React from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  //create user name and password

  return (
    <div>
      Login Page
    </div>
  );
};

export default LoginPage;
