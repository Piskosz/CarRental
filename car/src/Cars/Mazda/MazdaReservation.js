import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MazdaReservation = () => {

  const navigate = useNavigate()
  const goToWypozyczalnia = () => {
  navigate("/wypozyczalnia")

};
  const [formData, setFormData] = useState({
    dataOdbioru: '',
    dataZwrotu: ''
  });

  const [showData, setShowData] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(true);
  };

  return (
    <div className="rezerwa">
      <h1>Rezerwacja Mazda MX-5</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Data odbioru:</label>
          <input
            type="date"
            name="dataOdbioru"
            value={formData.dataOdbioru}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Data zwrotu:</label>
          <input
            type="date"
            name="dataZwrotu"
            value={formData.dataZwrotu}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Gotowe</button>
        <button onClick={goToWypozyczalnia}>Powrót</button>

      </form>

      {showData && (
        <div>
          <p>Data odbioru: {formData.dataOdbioru}</p>
          <p>Data zwrotu: {formData.dataZwrotu}</p>
        </div>
      )}
    </div>
  );
};

export default MazdaReservation;
