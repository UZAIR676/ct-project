import React, { useState, useEffect, useRef } from 'react';
import { GiPlainArrow } from "react-icons/gi";
import './salud1.css'; // Assuming you save the CSS in salud.css
import img1 from './Logo/2816.jpg'

const Salud = () => {
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
  
  const copagoInfoRef1 = useRef(null);
  const copagoInfoRef2 = useRef(null);
  const copagoInfoRef3 = useRef(null);
  
  const [copagoInfo1, setCopagoInfo1] = useState({});
  const [copagoInfo2, setCopagoInfo2] = useState({});
  const [copagoInfo3, setCopagoInfo3] = useState({});
  
  useEffect(() => {
    if (showInfo1) {
      const randomCopagoInfo = generateRandomCopagoInfo();
      setCopagoInfo1(randomCopagoInfo);
      document.addEventListener('click', handleClickOutside1);
    } else {
      document.removeEventListener('click', handleClickOutside1);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside1);
    };
  }, [showInfo1]);

  useEffect(() => {
    if (showInfo2) {
      const randomCopagoInfo = generateRandomCopagoInfo();
      setCopagoInfo2(randomCopagoInfo);
      document.addEventListener('click', handleClickOutside2);
    } else {
      document.removeEventListener('click', handleClickOutside2);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside2);
    };
  }, [showInfo2]);

  useEffect(() => {
    if (showInfo3) {
      const randomCopagoInfo = generateRandomCopagoInfo();
      setCopagoInfo3(randomCopagoInfo);
      document.addEventListener('click', handleClickOutside3);
    } else {
      document.removeEventListener('click', handleClickOutside3);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside3);
    };
  }, [showInfo3]);

  const generateRandomCopagoInfo = () => {
    const randomInfo = {
      "Consulta General": getRandomCost(),
      "Consulta Especialista": getRandomCost(),
      "Consulta Urgente": getRandomCost(),
      "Análisis de Sangre": getRandomCost(),
      "Radiografía Simple": getRandomCost(),
      "Ecografía": getRandomCost(),
      "Resonancia Magnética": getRandomCost(),
      "Consulta Odontológica": getRandomCost(),
      "Fisioterapia": getRandomCost()
    };
    return randomInfo;
  };

  const getRandomCost = () => {
    return Math.floor(Math.random() * 20) + 5; // Generates a random number between 5 and 24
  };

  const handleToggle1 = (e) => {
    e.stopPropagation(); // Prevent the event from bubbling up to document
    setShowInfo1(!showInfo1);
  };

  const handleToggle2 = (e) => {
    e.stopPropagation(); // Prevent the event from bubbling up to document
    setShowInfo2(!showInfo2);
  };

  const handleToggle3 = (e) => {
    e.stopPropagation(); // Prevent the event from bubbling up to document
    setShowInfo3(!showInfo3);
  };

  const handleClickOutside1 = (event) => {
    if (copagoInfoRef1.current && !copagoInfoRef1.current.contains(event.target)) {
      setShowInfo1(false);
    }
  };

  const handleClickOutside2 = (event) => {
    if (copagoInfoRef2.current && !copagoInfoRef2.current.contains(event.target)) {
      setShowInfo2(false);
    }
  };

  const handleClickOutside3 = (event) => {
    if (copagoInfoRef3.current && !copagoInfoRef3.current.contains(event.target)) {
      setShowInfo3(false);
    }
  };

  return (
    <div className="main-container" >
       {/* <h1>create a form here simple enter the insurance</h1> */}
       
        <div className="container">
      {
        <div className="search-bar">
          <input type="text" placeholder="Search" name="" id="" />
          <button>Search</button>
        </div>
    }
      {/* Salud1 */}
      <div className="background">
      <div className="background1">
        <div className="card">
          <div className="card2">
            <div className="company-logo">
           <img src= {img1} alt="" />      
            </div>
            <div className="Precio">
              <h1>Precio: 35€</h1>
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
          <div className="pet" onClick={handleToggle1}>
            <p>Mostrar información de copago</p>
            <div className="c"><GiPlainArrow /></div>
          </div>
          {showInfo1 && (
            <div className="copago-info" ref={copagoInfoRef1}>
              <h2>Información de copago:</h2>
              <ul>
                {Object.entries(copagoInfo1).map(([service, cost]) => (
                  <li key={service}>
                    <span>{service}</span>
                    <span>{cost}€</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Salud2 */}
      <div className="background2">
        <div className="card">
          <div className="card2">
            <div className="company-logo">
            <img src= {img1} alt="" />   
            </div>
            <div className="Precio">
              <h1>Precio: 35€</h1>
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
          <div className="pet" onClick={handleToggle2}>
            <p>Mostrar información de copago</p>
            <div className="c"><GiPlainArrow /></div>
          </div>
          {showInfo2 && (
            <div className="copago-info" ref={copagoInfoRef2}>
              <h2>Información de copago:</h2>
              <ul>
                {Object.entries(copagoInfo2).map(([service, cost]) => (
                  <li key={service}>
                    <span>{service}</span>
                    <span>{cost}€</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Salud3 */}
      <div className="background3">
        <div className="card">
          <div className="card2">
            <div className="company-logo">
            <img src= {img1} alt="" />   
            </div>
            <div className="Precio">
              <h1>Precio: 35€</h1>
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
          <div className="pet" onClick={handleToggle3}>
            <p>Mostrar información de copago</p>
            <div className="c"><GiPlainArrow /></div>
          </div>
          {showInfo3 && (
            <div className="copago-info" ref={copagoInfoRef3}>
              <h2>Información de copago:</h2>
              <ul>
                {Object.entries(copagoInfo3).map(([service, cost]) => (
                  <li key={service}>
                    <span>{service}</span>
                    <span>{cost}€</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
    </div>
  
  );
}

export default Salud;
