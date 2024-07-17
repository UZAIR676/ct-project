import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './viajie.css';

const Viajie = () => {
  const [selectedOption, setSelectedOption] = useState('moto');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    province: '',
    travelDays: '',
    acceptPolicy: false,
  });

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const renderForm = () => {
    if (selectedOption === 'moto') {
      return (
        <div id="cardInsurance-coche" className="home__card snipcss0-1-1-24 fadeIn card1--active snipcss-6yczs">
          <div className="home__card__box-titles snipcss0-2-24-25">
        <span className="home__card__titles home__card__titles--1 snipcss0-3-25-26">Tu seguro de moto al mejor precio.</span>
        <p className="home__card__titles home__card__titles--2 snipcss0-3-25-27">¡Desde 50 €/año!</p>
          </div>
          <form className="form home__card__form home__card__form--3 home__card__form--4 snipcss0-2-24-28" action="?.php" data-insurance-form="moto" method="post" noValidate>
        <div className="form__group snipcss0-3-28-29 has-success">
          <input
            name="name"
            type="text"
            value={formData.name}
            className="form__input snipcss0-4-29-30"
            placeholder="Nombre"
            tabIndex="1"
            required
            onChange={handleInputChange}
          />
          <span className="pristine-error form__error style-2iYIm" id="style-2iYIm"></span>
        </div>
        <div className="form__group snipcss0-3-28-31 form__group-user-error">
          <input
            name="email"
            type="email"
            value={formData.email}
            maxLength="50"
            className="form__input snipcss0-4-31-32"
            placeholder="Email"
            tabIndex="1"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form__group snipcss0-3-28-33">
          <input
            name="phone"
            type="text"
            value={formData.phone}
            minLength="9"
            maxLength="9"
            className="form__input snipcss0-4-33-34"
            placeholder="Teléfono"
            tabIndex="1"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form__group snipcss0-3-142-147">
              <select id="select-salud" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '5px', color: 'rgba(0,0,0,0.7)', fontWeight: '300', cursor: 'pointer' }} name="province_id" data-select-type="province" required className="style-tEv7x js-Dropdown" onChange={(e) => {
                setProvince(e.target.value);
              }}>
                <option value="#" selected disabled >Destino</option>
                <option value="A Coruña">Expaña</option>
                <option value="Álava">Europa</option>
                <option value="Albacete">Mundo</option>
                
              </select>
            </div>
        <div className="form__group snipcss0-3-28-33">
          <input
            name="travelDays"
            type="text"
            value={formData.travelDays}
            minLength="9"
            maxLength="9"
            className="form__input snipcss0-4-33-34"
            placeholder="Días de viaje"
            tabIndex="1"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="home__card__form-checkbox home__card__form-checkbox--2 snipcss0-3-28-35">
          <div className="form__radio form__group snipcss0-4-35-36">
            <input
          className="form__radio-input snipcss0-5-36-37"
          type="checkbox"
          id="acceptpolicy-moto"
          name="acceptPolicy"
          checked={formData.acceptPolicy}
          onChange={handleInputChange}
          required
            />
            <label htmlFor="acceptpolicy-moto" className="form__radio-label snipcss0-5-36-38">
          <span className="form__radio-element snipcss0-6-38-39"></span> Tus datos son tratados por iSalud para prestarte los <u className="snipcss0-6-38-40"><a href="/servicios" title="servicios" rel="nofollow" className="snipcss0-7-40-41">servicios</a></u> de <b className="snipcss0-6-38-42">búsqueda</b> solicitados, <b className="snipcss0-6-38-43">consistentes en</b> realizar acciones comerciales por medios electrónicos o a distancia, <b className="snipcss0-6-38-44">en nombre propio</b> y en nombre las <u className="snipcss0-6-38-45">
            <a href="/entidades-aseguradoras" title="entidades aseguradoras" rel="nofollow" className="snipcss0-7-45-46">entidades aseguradoras </a>
          </u> y de las entidades de prestación de servicios con las que iSalud colabora, <b className="snipcss0-6-38-47">sea de</b> productos propios y/o de terceros y/o para mediar en la oferta y contratación de seguros. Puedes consultar la información ampliada sobre el tratamiento de tus datos y cómo ejercer tus derechos en la <a href="/politica-de-privacidad" title="política de privacidad" className="snipcss0-6-38-48">
            <u className="snipcss0-7-48-49">Política de Privacidad</u>
          </a>
            </label>
          </div>
        </div>
        <Link to='/viaje1'>
          <button className="btn__icon btn1-big btn1-doctori-red submit snipcss0-4-35-50">Buscar</button>
        </Link>
          </form>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="n1">
        <div className="mp">
          <nav id="navTabsInsurance-doctori" className="home__tabs-rounded snipcss0-1-1-5 snipcss0-0-0-1 snipcss-ENmj9">
            <div className="o">
              <Link to='/vida'>
                <div className="p">
                  <a href="#coche" className="form__checkbox snipcss0-2-5-7 snipcss0-1-1-3" data-insurance="coche">
                    <input type="radio" name="insurance" value="coche" id="radio-coche" checked={selectedOption === 'coche'} onChange={handleOptionChange} />
                  </a>
                  <label htmlFor="radio-coche">Vida</label>
                </div>
              </Link>
              <Link to='/viajie'>
                <div className="p">
                  <a href="#moto" className="form__checkbox snipcss0-2-5-11 snipcss0-1-1-7" data-insurance="moto">
                    <input type="radio" name="insurance" value="moto" id="radio-moto" checked={selectedOption === 'moto'} onChange={handleOptionChange} />
                  </a>
                  <label htmlFor="radio-moto">Viaje</label>
                </div>
              </Link>
              <Link to='/salud'>
                <div className="p">
                  <a href="#salud" className="form__checkbox snipcss0-2-5-15 snipcss0-1-1-11" data-insurance="salud">
                    <input type="radio" name="insurance" value="salud" id="radio-salud" checked={selectedOption === 'salud'} onChange={handleOptionChange} />
                  </a>
                  <label htmlFor="radio-salud">Salud</label>
                </div>
              </Link>
              <Link to='/decesos'>
                <div className="p">
                  <a href="#Decesos" className="form__checkbox snipcss0-2-5-15 snipcss0-1-1-11" data-insurance="Decesos">
                    <input type="radio" name="insurance" value="Decesos" id="radio-Decesos" checked={selectedOption === 'Decesos'} onChange={handleOptionChange} />
                  </a>
                  <label htmlFor="radio-salud">Decesos</label>
                </div>
              </Link>
            </div>
          </nav>
        </div>
        <br /><br /><br />
        {renderForm()}
      </div>
      {
        <div className="contar-con">
          <h1 className="heading">Viaje</h1>
          <div className="contar-con1">
            <p>
              Los seguros de viaje son indispensables para cualquier viajero, ya que ofrecen protección integral frente a los imprevistos que pueden surgir durante un viaje. En primer lugar, un seguro de viaje cubre una amplia gama de situaciones, desde emergencias médicas hasta la cancelación del viaje. Esto incluye costos médicos inesperados, hospitalización, evacuación médica, y repatriación en caso de enfermedad o accidente. También puede proteger contra la pérdida de equipaje, retrasos en vuelos, y cancelaciones de último minuto, lo que ayuda a recuperar los costos no reembolsables y garantiza que el viajero no sufra pérdidas económicas significativas. Así, con un seguro de viaje, se puede viajar con la tranquilidad de estar preparado para cualquier eventualidad.
              <br />
              <br />
              Contratar un seguro de viaje también proporciona acceso a asistencia global las 24 horas del día. Esto es particularmente útil cuando se viaja a países extranjeros donde el idioma y el sistema de salud pueden ser diferentes y complicados de entender. La asistencia puede incluir la localización de servicios médicos adecuados, la coordinación de transporte de emergencia, y el apoyo en la resolución de problemas legales y administrativos. Además, muchos seguros de viaje ofrecen beneficios adicionales, como cobertura para actividades de aventura y deportes extremos, protección contra fraudes con tarjetas de crédito, y asistencia en caso de robo de documentos importantes. En resumen, un seguro de viaje no solo protege contra riesgos financieros y médicos, sino que también proporciona un respaldo integral y tranquilidad para disfrutar plenamente de la experiencia de viajar.
            </p>
          </div>
        </div>
      }
    </div>
  );
};

export default Viajie;
