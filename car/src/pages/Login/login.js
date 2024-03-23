import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    login: '',
    haslo: ''
  });

  const goToWypozyczalnia = () => {
    navigate("/wypozyczalnia");
  };

  const goBackHome = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/testowy', formData);
      const token = response.data;
      console.log('Logowanie udane!');
      goToWypozyczalnia();
    } catch (error) {
      console.error('Błąd podczas logowania:', error.response.data);
    }
  };
  return (
    <div className="login">
      <h1>Formularz logowania</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Login:</label>
          <input
            type="text"
            name="login"
            value={formData.login}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Hasło:</label>
          <input
            type="password"
            name="haslo"
            value={formData.haslo}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Zaloguj się</button>
      </form>
      <button onClick={goBackHome}>Powrót do strony głównej</button>
    </div>
  );
};

export default Login;
