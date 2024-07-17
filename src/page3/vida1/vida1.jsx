import React, { useState } from 'react';
import './vida1.css';
import img1 from './Logo/2816.jpg'

const ageRateMap = {
  20: 11.13, 21: 11.23, 22: 11.33, 23: 11.43, 24: 11.53,
  25: 11.63, 26: 11.53, 27: 11.53, 28: 11.43, 29: 11.23,
  30: 11.13, 31: 11.13, 32: 11.23, 33: 11.53, 34: 12.03,
  35: 12.73, 36: 13.53, 37: 14.43, 38: 15.43, 39: 16.53,
  40: 17.73, 41: 19.13, 42: 20.73, 43: 22.63, 44: 24.63,
  45: 32.02, 46: 34.32, 47: 37.02, 48: 39.82, 49: 43.12,
  50: 46.62
};

const Vida1 = () => {
  const [totalInsured, setTotalInsured] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState(null);
  const [showBackground, setShowBackground] = useState(false);

  const handleCalculate = () => {
    const insuredValue = parseFloat(totalInsured);
    const ageValue = parseInt(age, 10);

    if (isNaN(insuredValue) || isNaN(ageValue) || !ageRateMap[ageValue]) {
      setResult('Invalid input');
      setShowBackground(false); // Ensure background doesn't show on invalid input
      return;
    }

    const baseRate = ageRateMap[ageValue];
    const calculation = (insuredValue / 10000) * baseRate;
    setResult(`Price: ${calculation.toFixed(2)} €`);
    setShowBackground(true); // Show background on valid input
  };

  return (
    <div className='templateContainer'>
      <div className="searchInputContainer" style={styles.searchInputContainer}>
        <input
          className='search'
          type='text'
          placeholder='Total Insured (€)'
          value={totalInsured}
          onChange={(e) => setTotalInsured(e.target.value)}
          style={styles.input}
        />
        <input
          className='search'
          type='text'
          placeholder='Age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button} onClick={handleCalculate}>Search</button>
      </div>
      {result && <div className='result'>{result}</div>}
      {showBackground && (
        <div className="background1">
          <div className="card">
            <div className="card2">
              <div className="company-logo">
              <img src= {img1} alt="" /> 
              </div>
              <div className="Precio">
                <h1>{result}</h1>
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

const styles = {
  searchInputContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '20px',
  },
  input: {
    width: '30%',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    width: '30%',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Vida1;
