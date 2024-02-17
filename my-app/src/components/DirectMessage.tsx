import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import { useNavigate } from 'react-router-dom';
import { Button} from "@mui/material";
import MessageBox from './MessageBox';





function DirectMessage() {

 
   const navigate = useNavigate();

   const handleClick = () => {
     navigate('/');
   };

  return (
    <div>
        <Button sx={{
        backgroundColor: 'red',
        color: 'black',
        border: 0,
        borderRadius: 3,
        boxShadow: 'none',
        height: 48,
        padding: '0 30px',
        '&:hover': {
          backgroundColor: 'darkred',
        },
      }} onClick={handleClick}>Home</Button>
      <MessageBox/>
    </div>

  );
}

export default DirectMessage;
