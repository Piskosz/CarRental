
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Wypozyczalnia = ({ handleZarezerwujClick }) => {
  const navigate = useNavigate()
  const goToToyota = () => {


    navigate("/toyota")
    
  }
  const goToFord = () => {


    navigate("/ford")
    
  }
  const goToMazda = () => {


    navigate("/mazda")
    
  }


  return (

    <div className="container">
    <div className="gallery-item">
      <h1>Toyota Corolla</h1>
      <img src="\Toyota.png" alt="Zdjęcie 1" />
      <button onClick={goToToyota}>Zarejestruj </button>
    </div>
    <div className="gallery-item">
      <h1>Ford Mustang</h1>
      <img src="\Ford.png" alt="Zdjęcie 2" />
      <button onClick={goToFord}>Zarejestruj </button>
    </div>
    <div className="gallery-item">
      <h1>Mazda MX 5</h1>
      <img src="\Mazda.png" alt="Zdjęcie 3" />
      <button onClick={goToMazda}>Zarejestruj </button>
    </div>
  </div>
  );
};

export default Wypozyczalnia;

