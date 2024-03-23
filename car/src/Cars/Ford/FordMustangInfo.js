import React from 'react';
import { useNavigate } from 'react-router-dom';

const FordMustangInfo = () => {
  const navigate = useNavigate()

  const handleWypozyczClick = () => {
    navigate("/fordreservation")
  };

  const goToWypozyczalnia = () => {
    navigate("/wypozyczalnia")

  };

  return (
    <div className="info">
      <h1>Informacje o modelu Ford Mustang 2018</h1>
      <p>Model: Ford Mustang</p>
      <p>Rok produkcji: 2018</p>
      <p>Specyfikacje techniczne:</p>
      <ul>
        <li>Silnik: 5.0L V8</li>
        <li>Moc: 460 KM</li>
        <li>Skrzynia biegów: 10-biegowa automatyczna</li>
        <li>Wymiary: 4788 mm x 1916 mm x 1381 mm</li>
        <li>Wyposażenie: Klimatyzacja, System multimedialny, System bezpieczeństwa, itp.</li>
      </ul>
      <button onClick={handleWypozyczClick}>Wypożycz</button>
      <button onClick={goToWypozyczalnia}>Zrezygnuj</button>
    </div>
  );
};

export default FordMustangInfo;
