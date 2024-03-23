import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Rejestracja = ({  }) => {
  const navigate = useNavigate()

  const gotoHome = () => {

    navigate("/")
    
  }

  const [formData, setFormData] = useState({
    login: '',
    haslo: '',
    mail: ''
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/Rejestracja/dodawanie/',
        [formData],
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(response.data.message);
      setRegistrationSuccess(true);
    } catch (error) {
      console.error('Błąd podczas rejestracji:', error);
      console.error('Szczegóły błędu:', error.response.data);
    }
  };

  const renderSuccessMessage = () => {
    if (registrationSuccess) {
      return <p>Poprawnie zarejestrowano użytkownika!</p>;
    }
    return null;
  };

  return (
    <div className="Rejestracja">
      <h2>Formularz rejestracji</h2>
      {renderSuccessMessage()}
      <form onSubmit={handleSubmit}>
        <div>
          <label>LOGIN : </label>
          <input
            type="text"
            name="login"
            value={formData.login}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>MAIL : </label>
          <input
            type="email"
            name="mail"
            value={formData.mail}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>HASLO : </label>
          <input
            type="password"
            name="haslo"
            value={formData.haslo}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Zarejestruj się</button>
        <button onClick={gotoHome}>Powrót do strony głównej</button>
      </form>
    </div>
  );
};

export default Rejestracja;
