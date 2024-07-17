import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './vida.css';

const Vida = () => {
  const [selectedOption, setSelectedOption] = useState('coche');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    totalAsegurado: '',
    edad: ''
  });

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderForm = () => {
    if (selectedOption === 'coche') {
      return (
        <div id="cardInsurance-coche" className="home__card snipcss0-1-1-24 fadeIn snipcss0-0-0-1 card1--active snipcss-hKy6V">
          <div className="home__card__box-titles snipcss0-2-24-25 snipcss0-1-1-2">
            <span className="home__card__titles home__card__titles--1 snipcss0-3-25-26 snipcss0-2-2-3">
              Ahorra hasta un 50% en tu seguro de coche
            </span>
          </div>
          <form className="form home__card__form snipcss0-2-24-27 snipcss0-1-1-4" action="#" data-insurance-form="coche" noValidate={true}>
            <div className="form__group snipcss0-3-27-28 snipcss0-2-4-5 has-success">
              <input
                name="name"
                type="text"
                value={formData.name}
                className="form__input snipcss0-4-28-29 snipcss0-3-5-6"
                placeholder="Nombre"
                tabIndex="1"
                required
                onChange={handleInputChange}
              />
              <span className="pristine-error form__error style-vNZ72" id="style-vNZ72"></span>
            </div>
            <div className="form__group snipcss0-3-27-30 snipcss0-2-4-7">
              <input
                name="phone"
                type="text"
                value={formData.phone}
                minLength="9"
                maxLength="9"
                className="form__input snipcss0-4-30-31 snipcss0-3-7-8"
                placeholder="Teléfono"
                tabIndex="1"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="form__group snipcss0-3-27-32 snipcss0-2-4-9">
              <input
                name="email"
                type="email"
                value={formData.email}
                maxLength="50"
                className="form__input snipcss0-4-32-33 snipcss0-3-9-10"
                placeholder="Email"
                tabIndex="1"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="form__group snipcss0-3-27-32 snipcss0-2-4-9">
              <input
                name="totalAsegurado"
                type="text"
                value={formData.totalAsegurado}
                maxLength="50"
                className="form__input snipcss0-4-32-33 snipcss0-3-9-10"
                placeholder="Total asegurado"
                tabIndex="1"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="form__group snipcss0-3-27-32 snipcss0-2-4-9">
              <input
                name="edad"
                type="text"
                value={formData.edad}
                maxLength="50"
                className="form__input snipcss0-4-32-33 snipcss0-3-9-10"
                placeholder="Date(Edad)"
                tabIndex="1"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="home__card__form-checkbox home__card__form-checkbox--2 snipcss0-3-142-270">
              <div className="form__radio form__group snipcss0-4-270-271">
                <input className="form__radio-input snipcss0-5-271-272" type="checkbox" id="acceptpolicy" name="acceptpolicy" value="1" required />
                <label htmlFor="acceptpolicy" className="form__radio-label snipcss0-5-271-273">
                  <span className="form__radio-element snipcss0-6-273-274"></span> Tus datos son tratados por iSalud para prestarte los <u className="snipcss0-6-273-275"><a href="/servicios" title="servicios" rel="nofollow" className="snipcss0-7-275-276">servicios</a></u> de <b className="snipcss0-6-273-277">búsqueda</b> solicitados, <b className="snipcss0-6-273-278">consistentes en</b> realizar acciones comerciales por medios electrónicos o a distancia, <b className="snipcss0-6-273-279">en nombre propio</b> y en nombre las <u className="snipcss0-6-273-280">
                    <a href="/entidades-aseguradoras" title="entidades aseguradoras" rel="nofollow" className="snipcss0-7-280-281">entidades aseguradoras  </a>
                  </u> y de las entidades de prestación de servicios con las que iSalud colabora, <b className="snipcss0-6-273-282">sea de</b> productos propios y/o de terceros y/o para mediar en la oferta y contratación de seguros. Puedes consultar la información ampliada sobre el tratamiento de tus datos y cómo ejercer tus derechos en la <a href="/politica-de-privacidad" title="política de privacidad" className="snipcss0-6-273-283">
                    <u className="snipcss0-7-283-284">Política de Privacidad</u>
                  </a>
                </label>
              </div>
                          </div>
            <Link to="/vida1">
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
              <Link to="/vida">
                <div className="p">
                  <a href="#coche" className="form__checkbox snipcss0-2-5-7 snipcss0-1-1-3" data-insurance="coche">
                    <input
                      type="radio"
                      name="insurance"
                      value="coche"
                      id="radio-coche"
                      checked={selectedOption === 'coche'}
                      onChange={handleOptionChange}
                    />
                  </a>{' '}
                  <label htmlFor="radio-coche">Vida</label>
                </div>
              </Link>
              <Link to="/viajie">
                <div className="p">
                  <a href="#moto" className="form__checkbox snipcss0-2-5-11 snipcss0-1-1-7" data-insurance="moto">
                    <input
                      type="radio"
                      name="insurance"
                      value="moto"
                      id="radio-moto"
                      checked={selectedOption === 'moto'}
                      onChange={handleOptionChange}
                    />
                  </a>{' '}
                  <label htmlFor="radio-moto">Viaje</label>
                </div>
              </Link>
              <Link to="/salud">
                <div className="p">
                  <a href="#salud" className="form__checkbox snipcss0-2-5-15 snipcss0-1-1-11" data-insurance="salud">
                    <input
                      type="radio"
                      name="insurance"
                      value="salud"
                      id="radio-salud"
                      checked={selectedOption === 'salud'}
                      onChange={handleOptionChange}
                    />
                  </a>{' '}
                  <label htmlFor="radio-salud">Salud</label>
                </div>
              </Link>
              <Link to="/decesos">
                <div className="p">
                  <a href="#Decesos" className="form__checkbox snipcss0-2-5-15 snipcss0-1-1-11" data-insurance="Decesos">
                    <input
                      type="radio"
                      name="insurance"
                      value="Decesos"
                      id="radio-Decesos"
                      checked={selectedOption === 'Decesos'}
                      onChange={handleOptionChange}
                    />
                  </a>{' '}
                  <label htmlFor="radio-salud">Decesos</label>
                </div>
              </Link>
            </div>
          </nav>
        </div>
        <br />
        <br />
        <br />
        {renderForm()}
      </div>
      <div className="contar-con">
        <h1>Vida</h1>
        <div className="contar-con1">
          Contar con un seguro de vida es una decisión clave para asegurar el bienestar financiero de nuestros seres queridos en caso de nuestro fallecimiento. En primer lugar, un seguro de vida proporciona una red de seguridad económica para la familia, permitiendo que puedan afrontar gastos inmediatos y futuros sin dificultades financieras. Esto incluye la cobertura de deudas pendientes, como hipotecas, préstamos personales y tarjetas de crédito, así como los costos asociados con el funeral y los servicios funerarios. Además, el seguro de vida puede garantizar que los dependientes económicos, como cónyuges, hijos y otros familiares, tengan los recursos necesarios para mantener su nivel de vida, cubrir gastos educativos y planificar su futuro con más estabilidad y confianza.
          <br />
          <br />
          Contratar un seguro de vida también ofrece tranquilidad y la seguridad de que, en caso de una tragedia, los seres queridos estarán protegidos económicamente. Esta tranquilidad permite a las personas vivir con menos preocupaciones y centrarse en disfrutar el tiempo con sus familias, sabiendo que su bienestar financiero está asegurado. Asimismo, muchas pólizas de seguro de vida ofrecen beneficios adicionales, como la posibilidad de acumulación de valor en efectivo, que puede ser utilizado para emergencias, inversión o como ahorro para la jubilación. En resumen, un seguro de vida no solo es una medida prudente para proteger a nuestros seres queridos, sino también una inversión en la estabilidad y el futuro financiero de la familia.
        </div>
      </div>
    </div>
  );
};

export default Vida;
