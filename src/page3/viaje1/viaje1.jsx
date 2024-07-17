import React, { useState } from 'react';
import './viaje.css';
import img1 from './Logo/2816.jpg'

const priceMap = {
  '0-5': { Spain: 12.25, Europe: 18.25, World: 30 },
  '6-9': { Spain: 21.75, Europe: 33.25, World: 48.75 },
  '10-16': { Spain: 32, Europe: 46.5, World: 73 },
  '17-22': { Spain: 37.75, Europe: 59.5, World: 106 },
  '23-34': { Spain: 49.25, Europe: 71, World: 127 },
  '35-49': { Spain: 66, Europe: 100, World: 169.75 },
  '50-64': { Spain: 80, Europe: 133, World: 229.25 }
};

const additionalCost = { Spain: 24.25, Europe: 34.75, World: 55.5 };

const getTier = (days) => {
  if (days <= 5) return '0-5';
  if (days <= 9) return '6-9';
  if (days <= 16) return '10-16';
  if (days <= 22) return '17-22';
  if (days <= 34) return '23-34';
  if (days <= 49) return '35-49';
  if (days <= 64) return '50-64';
  return 'additional';
};

const calculatePrice = (days, region) => {
  let tier = getTier(days);
  if (tier !== 'additional') {
    return priceMap[tier][region];
  }

  let basePrice = priceMap['50-64'][region];
  let extraDays = days - 64;
  let extraCost = Math.ceil(extraDays / 15) * additionalCost[region];
  return basePrice + extraCost;
};

const Viaje = () => {
  const [days, setDays] = useState('');
  const [region, setRegion] = useState('Spain');
  const [price, setPrice] = useState(null);
  const [showBackground, setShowBackground] = useState(false);

  const handleCalculate = () => {
    const daysValue = parseInt(days, 10);
    if (isNaN(daysValue) || daysValue < 0) {
      setPrice('Invalid input');
      return;
    }
    const calculatedPrice = calculatePrice(daysValue, region);
    setPrice(` Price is: ${calculatedPrice.toFixed(2)} €`);
    setShowBackground(true); // Show background when calculating price
  };

  return (
    <div className='templateContainer'>
      <div className="searchInputContainer">
        <input
          className='search'
          type='text'
          placeholder='Number of days'
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <select className='search' value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="Spain">Spain</option>
          <option value="Europe">Europe</option>
          <option value="World">World</option>
        </select>
        <br />
        <div className="qwe"><button  onClick={handleCalculate}>Calculate</button></div>
        
      </div>
     

      {showBackground && (
        <div className="background1">
          <div className="card">
            <div className="card2">
              <div className="company-logo">
              <img src= {img1} alt="" />  
              </div>
              <div className="Precio">
                <h1>{price}</h1>
              </div>
            </div>
            <div className="card3">
              <div className="contactanos">
                <h1>CONTACTANOS</h1>
              </div>
              <div className="telefono">
                <button>Telefono- 911084234</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Viaje;
