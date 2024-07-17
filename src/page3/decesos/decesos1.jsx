import React, { useState } from 'react';
import './dee.css';
import img1 from './Logo/2816.jpg'

const ageRateMap = {
  0: 0.003740, 1: 0.003740, 2: 0.003607, 3: 0.003488, 4: 0.003390, 5: 0.003321,
  6: 0.003277, 7: 0.003254, 8: 0.003243, 9: 0.003242, 10: 0.003257, 11: 0.003291,
  12: 0.003353, 13: 0.003444, 14: 0.003564, 15: 0.003710, 16: 0.003865, 17: 0.004012,
  18: 0.003991, 19: 0.003997, 20: 0.004012, 21: 0.004031, 22: 0.004057, 23: 0.004081,
  24: 0.004104, 25: 0.004121, 26: 0.004126, 27: 0.004121, 28: 0.004105, 29: 0.004083,
  30: 0.004069, 31: 0.004066, 32: 0.004082, 33: 0.004128, 34: 0.004214, 35: 0.004344,
  36: 0.004503, 37: 0.004681, 38: 0.004868, 39: 0.005061, 40: 0.005270, 41: 0.005505,
  42: 0.005904, 43: 0.006404, 44: 0.006997, 45: 0.007674, 46: 0.008449, 47: 0.009350,
  48: 0.010359, 49: 0.011495, 50: 0.012743, 51: 0.013746, 52: 0.014807, 53: 0.015918,
  54: 0.017078, 55: 0.018290, 56: 0.019566, 57: 0.020920, 58: 0.022367, 59: 0.023919,
  60: 0.025591, 61: 0.027397, 62: 0.029355, 63: 0.031490, 64: 0.033828, 65: 0.036403,
  66: 0.039254, 67: 0.042430, 68: 0.045997, 69: 0.050034, 70: 0.054638, 71: 0.059925,
  72: 0.066024, 73: 0.073060, 74: 0.081149, 75: 0.102395, 76: 0.109243, 77: 0.116750,
  78: 0.124994, 79: 0.134063, 80: 0.144053, 81: 0.155071, 82: 0.167223, 83: 0.180625,
  84: 0.195395, 85: 0.211654, 86: 0.229525, 87: 0.249134, 88: 0.270603, 89: 0.294052,
  90: 0.319603, 91: 0.347380, 92: 0.377521, 93: 0.410187, 94: 0.445580, 95: 0.483971,
  96: 0.525757, 97: 0.571619, 98: 0.622895, 99: 0.682426, 100: 0.756715, 101: 0.840488,
  102: 0.934640, 103: 1.037302, 104: 1.145462, 105: 1.255133, 106: 1.361629, 107: 1.459972
};

const Decesos1 = () => {
  const [age, setAge] = useState('');
  const [result, setResult] = useState(null);
  const [showCard, setShowCard] = useState(false);

  const handleCalculate = () => {
    const ageValue = parseInt(age, 10);

    if (isNaN(ageValue) || !ageRateMap[ageValue]) {
      setResult('Invalid input');
      setShowCard(false); // Hide the card if the input is invalid
      return;
    }

    const baseRate = ageRateMap[ageValue];
    const calculation = (baseRate * 4000) + 20;
    setResult(` price is: ${calculation.toFixed(2)} €`);
    setShowCard(true); 
  };

  return (
    <div className='templateComtainer'>
      <div className="serachInputContainer">
        <input
          className='serach'
          type='text'
          placeholder='Age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      {result && <div className=''>{result}</div>}
      {showCard && (
        <div className="background1">
          <div className="card">
            <div className="card2">
              <div className="company-logo">
              <img src= {img1} alt="" />  
              </div>
              <div className="Precio">
                <h1>Precio: {result}</h1>
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

export default Decesos1;
