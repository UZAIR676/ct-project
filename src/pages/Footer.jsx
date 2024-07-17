import React from 'react';
import '../CSS/footor.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    
      <footer class="footer snipcss-WrsMQ">
        
        <div class="footer__box-1">
          <div id="e">
          <div class="footer__box-items">
            <span class="footer__box-items__title">Secciones</span>
            <a class="footer__box-items__link" href="/seguros" target="_blank" di_title="Seguros"> Seguros </a>
            <Link to='/vida' >
            <a class="footer__box-items__link" href="/seguros/coche" target="_blank" di_title="Seguros de coche"> Seguros de Vida </a></Link>
            <Link to='/viajie'>
            <a class="footer__box-items__link" href="/seguros/moto" target="_blank" di_title="Seguros de moto"> Seguros de Viaje </a></Link>
            <Link to='/salud'>
            <a class="footer__box-items__link" href="/seguros/salud" target="_blank" di_title="Seguros de salud"> Seguros de salud </a></Link>
            <Link to='/decesos'>
            <a class="footer__box-items__link" href="/seguros/decesos" target="_blank" di_title="Seguros de decesos"> Seguros de decesos </a></Link>
          </div></div>
          <div id="r">
          <div class="footer__box-items footer__box-items--2">
            <span class="footer__box-items__title">Términos Legales</span>
            <a class="footer__box-items__link" href="/legal"  di_title="Aviso legal" > Aviso legal </a>
            <a class="footer__box-items__link" href="/datos-del-mediador"  di_title="Datos del mediador"> Datos del mediador </a>
            <a class="footer__box-items__link" href="/servicios"  di_title="Servicios"> Servicios </a>
            <a class="footer__box-items__link white-space-nowrap" href="/entidades-aseguradoras"  di_title="Entidades aseguradoras"> Entidades aseguradoras </a>
          </div></div>
          <div id="p">
          <div class="footer__box-items">
            <span class="footer__box-items__title">Empresa</span>
            <a class="footer__box-items__link" href="/contacto" di_title="Contacto"> Contacto </a>
            <a class="footer__box-items__link cursor-pointer" href="/blog/" target="_blank" di_title="Blog"> Blog </a>
          </div></div>
          <div id="w">
          
          </div>

        </div>
        <div class="footer__box-3">
          <a href="/legal" di_title="Política de privacidad" > Política de privacidad </a>
        </div>
        <div class="footer__social-networks">
          <a href="https://www.facebook.com/doctoricom" target="_blank" rel="nofollow">
            <img src="https://da37wwyk1fu91.cloudfront.net/assets/images/alarmas/icon-facebook.svg?v=20240321094247"/>
          </a>
          <a href="https://www.instagram.com/doctori_com/" target="_blank" rel="nofollow">
            <img src="https://da37wwyk1fu91.cloudfront.net/assets/images/alarmas/icon-instagram.svg?v=20240321094247"/>
          </a>
          <a href="https://www.linkedin.com/company/doctori/" target="_blank" rel="nofollow">
            <img src="https://da37wwyk1fu91.cloudfront.net/assets/images/alarmas/icon-linkedin.svg?v=20240321094247"/>
          </a>
          <a href="https://www.youtube.com/channel/UC_tkMHBDuQbcK-hAdF_ZM-w" target="_blank" rel="nofollow">
            <img src="https://da37wwyk1fu91.cloudfront.net/assets/images/alarmas/icon-youtube.svg?v=20240321094247"/>
          </a>
        </div>
        <span class="footer__line"></span>
        <div class="footer__box-2">
          {/* ?        <p class="footer__box-items__text footer__box-items__text-3"> © 2024 Doctori.com - Todos los derechos reservados. <br> iSalud Health Services SL (Sociedad de Agencia de Seguros Vinculada) </p> */}
          <div class="footer__box-items__text footer__box-items__text-4">
            <p>Teléfono - <a class="footer__box-items__link" href="tel:911084234" target="_blank">911084234</a></p>
          </div>
        </div>
      </footer>
    
  );
}

export default Footer;
