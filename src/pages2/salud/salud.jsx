import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './salud.css'

const Salud = () => {
  const [selectedOption, setSelectedOption] = useState('salud');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [edad, setEdad] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEdadChange = (e) => {
    setEdad(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const renderForm = () => {
    if (selectedOption === 'salud') {
      return (
        <div id="cardInsurance-salud" className="home__card snipcss0-1-1-138 fadeIn card1--active snipcss-oagWi">
          <div className="home__card__box-titles snipcss0-2-138-139">
            <span className="home__card__titles home__card__titles--1 snipcss0-3-139-140">Tu seguro médico al mejor precio.</span>
            <p className="home__card__titles home__card__titles--2 snipcss0-3-139-141">¡Desde 9 €/mes!</p>
          </div>
          <form className="form home__card__form home__card__form--3 home__card__form--4 snipcss0-2-138-142" action="?.php" data-insurance-form="salud" method="post" noValidate>
            <div className={`form__group snipcss0-3-142-143 ${name.trim() === '' ? 'has-error' : 'has-success'}`}>
              <input
                name="name"
                type="text"
                value={name}
                className="form__input snipcss0-4-143-144"
                placeholder={name.trim() === '' ? 'Nombre (requerido)' : 'Nombre'}
                tabIndex="1"
                onChange={handleNameChange}
                required
              />
              {name.trim() === ''}
            </div>
            <div className={`form__group snipcss0-3-142-145 ${email.trim() === '' ? 'has-error' : 'has-success'}`}>
              <input
                name="email"
                type="email"
                value={email}
                maxLength="50"
                className="form__input snipcss0-4-145-146"
                placeholder={email.trim() === '' ? 'Email (requerido)' : 'Email'}
                tabIndex="1"
                onChange={handleEmailChange}
                required
              />
              {email.trim() === ''}
            </div>
            <div className={`form__group snipcss0-3-142-147 ${phone.trim() === '' ? 'has-error' : 'has-success'}`}>
              <input
                name="phone"
                type="text"
                value={phone}
                minLength="9"
                maxLength="9"
                className="form__input snipcss0-4-260-261"
                placeholder={phone.trim() === '' ? 'Teléfono (requerido)' : 'Teléfono'}
                tabIndex="1"
                onChange={handlePhoneChange}
                required
              />
              {phone.trim() === ''}
            </div>
            <div className={`form__group snipcss0-3-142-147 ${edad.trim() === '' ? 'has-error' : 'has-success'}`}>
              <input
                name="edad"
                type="text"
                value={edad}
                minLength="9"
                maxLength="9"
                className="form__input snipcss0-4-260-261"
                placeholder={edad.trim() === '' ? 'Edad (requerido)' : 'Edad'}
                tabIndex="1"
                onChange={handleEdadChange}
                required
              />
              {edad.trim() === ''}
            </div>
            <div className="home__card__form-checkbox home__card__form-checkbox--2 snipcss0-3-142-270">
              <div className="form__radio form__group snipcss0-4-270-271">
                <input className="form__radio-input snipcss0-5-271-272" type="checkbox" id="acceptpolicy" name="acceptpolicy" value="1" required />
                <label htmlFor="acceptpolicy" className="form__radio-label snipcss0-5-271-273">
                  <span className="form__radio-element snipcss0-6-273-274"></span> Tus datos son tratados por iSalud para prestarte los <u className="snipcss0-6-273-275"><a href="/servicios" title="servicios" rel="nofollow" className="snipcss0-7-275-276">servicios</a></u> de <b className="snipcss0-6-273-277">búsqueda</b> solicitados, <b className="snipcss0-6-273-278">consistentes en</b> realizar acciones comerciales por medios electrónicos o a distancia, <b className="snipcss0-6-273-279">en nombre propio</b> y en nombre las <u className="snipcss0-6-273-280">
                    <a href="/entidades-aseguradoras" title="entidades aseguradoras" rel="nofollow" className="snipcss0-7-280-281">entidades aseguradoras </a>
                  </u> y de las entidades de prestación de servicios con las que iSalud colabora, <b className="snipcss0-6-273-282">sea de</b> productos propios y/o de terceros y/o para mediar en la oferta y contratación de seguros. Puedes consultar la información ampliada sobre el tratamiento de tus datos y cómo ejercer tus derechos en la <a href="/politica-de-privacidad" title="política de privacidad" className="snipcss0-6-273-283">
                    <u className="snipcss0-7-283-284">Política de Privacidad</u>
                  </a>
                </label>
              </div>
            </div>
            <Link to='/salud1'><button className="btn__icon btn1-big btn1-doctori-red submit snipcss0-4-35-50"> Buscar
            </button></Link>
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
          <h1>Salud</h1>
          <div className="contar-con1">Contar con un seguro de salud es fundamental para proteger el bienestar financiero y la salud personal. En primer lugar, un seguro de salud proporciona acceso a una amplia gama de servicios médicos que pueden ser prohibitivamente costosos sin cobertura. Esto incluye consultas médicas, hospitalizaciones, tratamientos de emergencia, cirugías y medicamentos, entre otros. Sin un seguro de salud, el costo de una sola emergencia médica puede ser devastador para la economía de una persona o familia. Además, la prevención y el tratamiento temprano de enfermedades a través de chequeos regulares y cuidados preventivos, que a menudo están cubiertos por las pólizas de seguro, son cruciales para mantener una buena salud a largo plazo y evitar complicaciones serias.
            <br />
            <br />
            Contratar un seguro de salud también ofrece tranquilidad y seguridad. Saber que se cuenta con el respaldo financiero y médico necesario en caso de una enfermedad o accidente permite vivir con menos preocupaciones y estrés. Este aspecto es especialmente importante en situaciones imprevistas donde la rapidez en la atención médica es crucial. Además, muchas pólizas de seguro de salud ofrecen beneficios adicionales, como programas de bienestar, descuentos en gimnasios y servicios de salud mental, que promueven un estilo de vida más saludable. En resumen, invertir en un seguro de salud no solo es una medida prudente para protegerse contra altos costos médicos, sino también una inversión en la calidad de vida y el bienestar general.
          </div>
        </div>
      }
    </div>
  );
};

export default Salud;
