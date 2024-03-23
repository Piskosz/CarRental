import React from 'react';
import { useNavigate } from 'react-router-dom';


const MazdaMX5Info = () => {

  const navigate = useNavigate()

  const handleWypozyczClick = () => {
    navigate("/mazdareservation")
  };

  const goToWypozyczalnia = () => {
    navigate("/wypozyczalnia")

  };

  return (
    <div className="info">
      <h1>Informacje o modelu Mazda MX-5</h1>
      <p>Model: Mazda MX-5</p>
      <p>Rok produkcji: {new Date().getFullYear()}</p>
      <p>Specyfikacje techniczne:</p>
      <ul>
        <li>Silnik: 2.0L 4-cylindrowy</li>
        <li>Moc: 181 KM</li>
        <li>Skrzynia biegów: 6-biegowa manualna</li>
        <li>Wymiary: 3915 mm x 1735 mm x 1235 mm</li>
        <li>Wyposażenie: Klimatyzacja, System multimedialny, System bezpieczeństwa, itp.</li>
      </ul>
      <button onClick={handleWypozyczClick}>Wypożycz</button>
      <button onClick={goToWypozyczalnia}>Zrezygnuj</button>
    </div>
  );
};

export default MazdaMX5Info;
