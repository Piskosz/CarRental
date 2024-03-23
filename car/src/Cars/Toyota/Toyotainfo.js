import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToyotaInfo = () => {

  const navigate = useNavigate()

  const handleWypozyczClick = () => {
    navigate("/toyotareservation")
  };

  const goToWypozyczalnia = () => {
    navigate("/wypozyczalnia")

  };
  return (
    <div class="info">
      <h1>Informacje o modelu Toyota</h1>
      <p>Model: Toyota Corolla</p>
      <p>Rok produkcji: 2022</p>
      <p>Specyfikacje techniczne:</p>
      <ul>
        <li>Silnik: 1.8L 4-cylindrowy</li>
        <li>Moc: 139 KM</li>
        <li>Skrzynia biegów: CVT</li>
        <li>Wymiary: 4620 mm x 1775 mm x 1435 mm</li>
        <li>Wyposażenie: Klimatyzacja, System multimedialny, System bezpieczeństwa Toyota Safety Sense, itp.</li>
      </ul>
      <button onClick={handleWypozyczClick}>Wypożycz</button>
      <button onClick={goToWypozyczalnia}>Zrezygnuj</button>
    </div>
  );
};

export default ToyotaInfo;
