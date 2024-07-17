import React, { useState } from 'react';
import './insurance.css';

const InsuranceCalculator = () => {
  const [days, setDays] = useState('');
  const [region, setRegion] = useState('Spain');
  const [price, setPrice] = useState(null);

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

  const handleCalculate = () => {
    const daysValue = parseInt(days, 10);
    if (isNaN(daysValue) || daysValue < 0) {
      setPrice('Invalid input');
      return;
    }
    const calculatedPrice = calculatePrice(daysValue, region);
    setPrice(`The price for ${daysValue} days in ${region} is: ${calculatedPrice.toFixed(2)} €`);
  };

  return (
    <div className="calculatorContainer">
      <div className="inputContainer">
        <input
          className="input"
          type="text"
          placeholder="Number of days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <select className="input" value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="Spain">Spain</option>
          <option value="Europe">Europe</option>
          <option value="World">World</option>
        </select>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      {price && (
        <div className="resultCard">
          <h3>Insurance Quote</h3>
          <p>{price}</p>
        </div>
      )}
    </div>
  );
};

export default InsuranceCalculator;
