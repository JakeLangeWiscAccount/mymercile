import React from 'react';
import { useNavigate } from 'react-router-dom';



function Home() {
 
    const navigate = useNavigate();

   const handleClick = () => {
     navigate('/profile');
   };

  return (
    <div>
        This is the home page.

        <button onClick={handleClick}>Go to New Route</button>
    </div>

  );
}

export default Home;
