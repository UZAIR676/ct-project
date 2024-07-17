import React, { useState, useRef, useEffect } from 'react';
import '../CSS/Navbar.css';
import { RiMenu4Line } from "react-icons/ri";
import { RiMenu2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isSegurosSubMenuOpen, setIsSegurosSubMenuOpen] = useState(false);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setIsLoginMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSegurosSubMenuToggle = (event) => {
    event.preventDefault(); // Prevent default link behavior
    setIsSegurosSubMenuOpen(!isSegurosSubMenuOpen);
  };

  const handleLoginMenuToggle = () => {
    if (isLoginMenuOpen) {
      setIsLoginMenuOpen(false);
    } else {
      setIsLoginMenuOpen(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Email:', email);
    console.log('Password:', password);
    setIsLoginMenuOpen(false);
  };

  return (
    <div className="navbar">
      <nav className="dropdownmenu">
        <Link className="logo" to={"/home"}> logo</Link>
        <div className='sugeurose'>
          <ul>
            <li className={isSegurosSubMenuOpen ? 'active' : ''} style={{position:'absolute'}}>
              <div className="l">
                <a href="#" className="seguros-link" onClick={handleSegurosSubMenuToggle}>
                  {isMobile ? (isSegurosSubMenuOpen ? <RiMenu4Line style={{ fontWeight: "bold", fontSize: "20px" }} /> : <RiMenu2Fill style={{ fontWeight: "bold", fontSize: "20px" }} />) : "Seguros"}
                </a>
              </div>
              <ul className={`submenu ${isMobile && isSegurosSubMenuOpen ? 'mobile-open' : ''}`} style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", borderRadius: "7px" }}>
                {isMobile && isSegurosSubMenuOpen && (
                  <div style={{ width: "100%" }}>
                    <div className="submenu-heading" style={{ color: "black", transform: "translateX(-80px)" }}> <br /><br />Blag  </div>
                  </div>
                )}
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  <Link to='/salud'><li><a href="#" style={{ textAlign: "left", paddingLeft: isMobile ? "60px" : "" }}>Salud</a></li><br /></Link> 
                <Link to='/vida'>  <li><a href="#" style={{ textAlign: "left", paddingLeft: isMobile ? "60px" : "" }}>Vida</a></li><br /></Link>
              <Link to='/decesos'>    <li><a href="#" style={{ textAlign: "left", paddingLeft: isMobile ? "60px" : "" }}>Decesos</a></li><br /></Link>
              <Link to='/viajie'>   <li><a href="#" style={{ textAlign: "left", paddingLeft: isMobile ? "60px" : "" }}>Viaje</a></li></Link> 
                </div>
              </ul>
            </li>
          </ul>
        </div>
        <button className="btn1__icon btn1-border-rounded btn1-doctori-white snipcss0-3-284-285 snipcss0-1-1-2 snipcss-QYtMd" >
          <figure className="image__box snipcss0-4-285-286 snipcss0-2-2-3">
          </figure>
          <span className="lorma" >
            <span className='i login-icon ' onClick={handleLoginMenuToggle}><CgProfile style={{ zIndex: "5" }} /></span>
          </span>

          {isLoginMenuOpen && (
            <div className="login-menu " ref={loginRef} style={{scale:"1.17",boxShadow:"5px 5px 10px rgba(0,0,0,0.35)"}}>
              <form onSubmit={handleSubmit}>
                <p>Email</p>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <p>Contraseña</p>
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <button type="submit">enterrar</button>
              </form>
              <p>¿Eres un usuario nuevo?
                <hr /><a href="#">Crea tu cuenta</a>
              </p>
            </div>
          )}
        </button>
      </nav>
      <br /><br />
      <hr />
    </div>
  );
}

export default Navbar;
