import { useNavigate } from 'react-router-dom';
import React from 'react';

const Home = ({ }) => {
  const navigate = useNavigate()
  const goToLogin = () => {


    navigate("/Logowanie")
    
  }
  const goToRejestracja = () => {


    navigate("/Rejestracja")
    
  }


  return (
    <div className="stronaGlowna">
      <h1>Strona główna</h1>
      <button onClick={goToRejestracja}>Rejestracja</button>
      <button onClick={goToLogin}>Logowanie</button>
    </div>
  );
};

export default Home;
