import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button} from "@mui/material";
import MessageBox from './MessageBox';





function DirectMessage() {

 
   const navigate = useNavigate();

   const handleClick = () => {
     navigate('/');
   };

   const [message, setMessage] = useState('');

    const handleMessageChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setMessage(e.target.value);
    };

    const handleSubmit = () => {
        // Handle sending message
        console.log('Message sent:', message);
        setMessage('');
        console.log(message);
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
      <MessageBox 
         value={message}
         onChange={handleMessageChange}
         onSubmit={handleSubmit}
      />
    </div>

  );
}

export default DirectMessage;
