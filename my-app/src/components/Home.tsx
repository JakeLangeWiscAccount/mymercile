import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeCalendar from './HomeCalendar';



function Home() {
 
    const navigate = useNavigate();

   const profileClick = () => {
     navigate('/profile');
   };
   const mentorMatchClick = () => {
    navigate('/mentor');
  };
  const directMessageClick = () => {
    navigate('/message');
  };

  return (
    <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
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
      }} onClick={profileClick}>My Profile</Button>
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
      }} onClick={mentorMatchClick}>Mentor Match</Button>
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
      }} onClick={directMessageClick}>Direct Message</Button>
      </div>
      <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Render elements vertically
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <HomeCalendar/>
        </Box>
    </div>

  );
}

export default Home;
