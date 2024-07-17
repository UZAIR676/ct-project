import React, { useState } from 'react';
import '../CSS/desde.css';
import { Link } from 'react-router-dom';


const Desde = () => {
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
  function toggleOptions() {
    var options = document.getElementById("dropdown-options");
    if (options.style.display === "none") {
      options.style.display = "block";
    } else {
      options.style.display = "none";
    }
  }


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
              <select
                id="select-salud"
                style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '5px', color: 'rgba(0,0,0,0.7)', fontWeight: '300', cursor: 'pointer' }}
                name="province"
                data-select-type="province"
                required
                className="style-tEv7x js-Dropdown"
                value={formData.province}
                onChange={handleInputChange}
              >
                <option value="#" disabled>Destino</option>
                <option value="Expaña">Expaña</option>
                <option value="Europa">Europa</option>
                <option value="Mundo">Mundo</option>
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
    else if (selectedOption === 'salud') {
      return (
        <div id="cardInsurance-salud" className="home__card snipcss0-1-1-138 fadeIn card1--active snipcss-oagWi">
          <div className="home__card__box-titles snipcss0-2-138-139">
            <span className="home__card__titles home__card__titles--1 snipcss0-3-139-140">Tu seguro médico al mejor precio.</span>
            <p className="home__card__titles home__card__titles--2 snipcss0-3-139-141">¡Desde 9 €/mes!</p>
          </div>
          <form className="form home__card__form home__card__form--3 home__card__form--4 snipcss0-2-138-142" action="?.php" data-insurance-form="salud" method="post" noValidate>
            <div className="form__group snipcss0-3-142-143 has-success">
              <input name="name" type="text" value="" className="form__input snipcss0-4-143-144" placeholder="Nombre" tabIndex="1" required />
              <span className="pristine-error form__error style-lURLn" id="style-lURLn"></span>
            </div>
            <div className="form__group snipcss0-3-142-145 form__group-user-error">
              <input name="email" type="email" value="" maxLength="50" className="form__input snipcss0-4-145-146" placeholder="Email" tabIndex="1" required />
              {/* <span className="pristine-error form__error">Este campo requiere una dirección de correo electrónico válida</span> */}
            </div>
            <div className="form__group snipcss0-3-142-147">
              <select id="select-salud" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '5px', color: 'rgba(0,0,0,0.7)', fontWeight: '300', cursor: 'pointer' }} name="province_id" data-select-type="province" required className="style-tEv7x js-Dropdown" onChange={(e) => {
                setProvince(e.target.value);
              }}>
                <option value="#" selected disabled >Provincia</option>
                <option value="A Coruña">A Coruña</option>
                <option value="Álava">Álava</option>
                <option value="Albacete">Albacete</option>
                <option value="Alicante">Alicante</option>
                <option value="Almería">Almería</option>
                <option value="Asturias">Asturias</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Cádiz">Cádiz</option>
                <option value="Cantabria">Cantabria</option>
                <option value="Castellón">Castellón</option>
                <option value="Ceuta">Ceuta</option>
                <option value="Ciudad-Real">Ciudad-Real</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Cuenca">Cuenca</option>
                <option value="Extremadura">Extremadura</option>
                <option value="Girona">Girona</option>
                <option value="Granada">Granada</option>
                <option value="Guadalajara">Guadalajara</option>
                <option value="Guipúzcoa">Guipúzcoa</option>
                <option value="Huelva">Huelva</option>
                <option value="Huesca">Huesca</option>
                <option value="Jaén">Jaén</option>
                <option value="Las Palmas de Gran Canaria">Las Palmas de Gran Canaria</option>
                <option value="León">León</option>
                <option value="Lleida">Lleida</option>
                <option value="Logroño">Logroño</option>
                <option value="Lugo">Lugo</option>
                <option value="Madrid">Madrid</option>
                <option value="Melilla">Melilla</option>
                <option value="Murcia">Murcia</option>
                <option value="Navarra">Navarra</option>
                <option value="ourense">ourense</option>
                <option value="Pontevedra">Pontevedra</option>
                <option value="Salamanca">Salamanca</option>
                <option value="Santa Cruz de Tenerife">Santa Cruz de Tenerife</option>
                <option value="Sevilla">Sevilla</option>
                <option value="Soria">Soria</option>
                <option value="Tarragona">Tarragona</option>
                <option value="Teruel">Teruel</option>
                <option value="Toledo">Toledo</option>
                <option value="Valencia">Valencia</option>
                <option value="Valladolid">Valladolid</option>
                <option value="Vizcaya">Vizcaya</option>
                <option value="zamora">zamora</option>
                <option value="Zaragoza">Zaragoza</option>
              </select>
            </div>
            <div className="form__group snipcss0-3-142-260">
              <input name="phone" type="text" value="" minLength="9" maxLength="9" className="form__input snipcss0-4-260-261" placeholder="Teléfono" tabIndex="1" required />
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
            <button className="btn__icon btn1-big btn1-doctori-red submit snipcss0-4-35-50"> Buscar
            </button>
          </form>
        </div>
      );
    }
    else if (selectedOption === 'coche') {
      return (
        <div id="cardInsurance-coche" className="home__card snipcss0-1-1-24 fadeIn snipcss0-0-0-1 card1--active snipcss-hKy6V">
          <div className="home__card__box-titles snipcss0-2-24-25 snipcss0-1-1-2">
            <span className="home__card__titles home__card__titles--1 snipcss0-3-25-26 snipcss0-2-2-3">Ahorra hasta un 50% en tu seguro de coche</span>
          </div>
          <form className="form home__card__form snipcss0-2-24-27 snipcss0-1-1-4" action="#" data-insurance-form="coche" noValidate={true}>
            <div className="form__group snipcss0-3-27-28 snipcss0-2-4-5 has-success">
              <input name="name" type="text" value="" className="form__input snipcss0-4-28-29 snipcss0-3-5-6" placeholder="Nombre" tabIndex="1" required />
              <span className="pristine-error form__error style-vNZ72" id="style-vNZ72"></span>
            </div>
            <div className="form__group snipcss0-3-27-30 snipcss0-2-4-7">
              <input name="phone" type="text" value="" minLength="9" maxLength="9" className="form__input snipcss0-4-30-31 snipcss0-3-7-8" placeholder="Teléfono" tabIndex="1" required />
            </div>
            <div className="form__group snipcss0-3-27-32 snipcss0-2-4-9">
              <input name="email" type="email" value="" maxLength="50" className="form__input snipcss0-4-32-33 snipcss0-3-9-10" placeholder="Email" tabIndex="1" required />
            </div>
            <div className="form__group snipcss0-3-27-32 snipcss0-2-4-9">
              <input name="email" type="email" value="" maxLength="50" className="form__input snipcss0-4-32-33 snipcss0-3-9-10" placeholder="Total asegurado" tabIndex="1" required />
            </div>
           
            <div className="home__card__form-checkbox snipcss0-3-27-63 snipcss0-2-4-40">
              <div className="form__radio form__group snipcss0-4-63-64 snipcss0-3-40-41">
                {/* <input className="form__radio-input snipcss0-5-64-65 snipcss0-4-41-42" type="checkbox" id="acceptCoche" name="acceptCoche" value="false" required /> */}
                <label htmlFor="acceptCoche" className="form__radio-label snipcss0-5-64-66 snipcss0-4-41-43">
                  <span className="form__radio-element snipcss0-6-66-67 snipcss0-5-43-44"></span> Tus datos son tratados por iSalud para prestarte los <u className="snipcss0-6-66-68 snipcss0-5-43-45"><a href="/servicios" title="servicios" rel="nofollow" className="snipcss0-7-68-69 snipcss0-6-45-46">servicios</a></u> de <b className="snipcss0-6-66-70 snipcss0-5-43-47">búsqueda</b> solicitados, <b className="snipcss0-6-66-71 snipcss0-5-43-48">consistentes en</b> realizar acciones comerciales por medios electrónicos o a distancia, <b className="snipcss0-6-66-72 snipcss0-5-43-49">en nombre propio</b> y en nombre las <u className="snipcss0-6-66-73 snipcss0-5-43-50">
                    <a href="/entidades-aseguradoras" title="entidades aseguradoras" rel="nofollow" className="snipcss0-7-73-74 snipcss0-6-50-51">entidades aseguradoras </a>
                  </u> y de las entidades de prestación de servicios con las que iSalud colabora, <b className="snipcss0-6-66-75 snipcss0-5-43-52">sea de</b> productos propios y/o de terceros y/o para mediar en la oferta y contratación de seguros. Puedes consultar la información ampliada sobre el tratamiento de tus datos y cómo ejercer tus derechos en la <a href="/politica-de-privacidad" title="política de privacidad" className="snipcss0-6-66-76 snipcss0-5-43-53">
                    <u className="snipcss0-7-76-77 snipcss0-6-53-54">Política de Privacidad</u>
                  </a>
                </label>
              </div>

            </div>
            <button className="btn__icon btn1-big btn1-doctori-red submit snipcss0-4-35-50"> Buscar
            </button>
          </form>
        </div>
      );
    }


    else if (selectedOption === 'Decesos') {
      return (
        <div id="cardInsurance-decesos" className="home__card fadeIn card1--active">
      <div className="home__card__box-titles">
        <span className="home__card__titles home__card__titles--1">Contrata tu seguro de decesos desde 2,5€/mes</span>
      </div>
      <form className="form home__card__form" onSubmit={handleSubmit} noValidate>
        <div className="form__group">
          <input
            name="name"
            type="text"
            value={formData.name}
            className="form__input"
            placeholder="Nombre"
            tabIndex="1"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group">
          <input
            name="phone"
            type="text"
            value={formData.phone}
            minLength="9"
            maxLength="9"
            className="form__input"
            placeholder="Teléfono"
            tabIndex="1"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group">
          <input
            name="email"
            type="email"
            value={formData.email}
            maxLength="50"
            className="form__input"
            placeholder="Email"
            tabIndex="1"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group">
          <span className="form__error-tooltip"></span>
          <input
            name="age"
            min="18"
            max="69"
            type="number"
            className="form__input"
            placeholder="Edad"
            tabIndex="1"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group">
          <select
            id="select-decesos"
            name="province"
            value={formData.province}
            onChange={handleChange}
            required
            className="form__input"
          >
            <option value="">Provincia</option>
            <option value="A Coruña">A Coruña</option>
            <option value="Álava">Álava</option>
            <option value="Albacete">Albacete</option>
            <option value="Alicante">Alicante</option>
            <option value="Almería">Almería</option>
            <option value="Asturias">Asturias</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Cádiz">Cádiz</option>
            <option value="Cantabria">Cantabria</option>
            <option value="Castellón">Castellón</option>
            <option value="Ceuta">Ceuta</option>
            <option value="Ciudad-Real">Ciudad-Real</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Cuenca">Cuenca</option>
            <option value="Extremadura">Extremadura</option>
            <option value="Girona">Girona</option>
            <option value="Granada">Granada</option>
            <option value="Guadalajara">Guadalajara</option>
            <option value="Guipúzcoa">Guipúzcoa</option>
            <option value="Huelva">Huelva</option>
            <option value="Huesca">Huesca</option>
            <option value="Jaén">Jaén</option>
            <option value="Las Palmas de Gran Canaria">Las Palmas de Gran Canaria</option>
            <option value="León">León</option>
            <option value="Lleida">Lleida</option>
            <option value="Logroño">Logroño</option>
            <option value="Lugo">Lugo</option>
            <option value="Madrid">Madrid</option>
            <option value="Melilla">Melilla</option>
            <option value="Murcia">Murcia</option>
            <option value="Navarra">Navarra</option>
            <option value="Ourense">Ourense</option>
            <option value="Pontevedra">Pontevedra</option>
            <option value="Salamanca">Salamanca</option>
            <option value="Santa Cruz de Tenerife">Santa Cruz de Tenerife</option>
            <option value="Sevilla">Sevilla</option>
            <option value="Soria">Soria</option>
            <option value="Tarragona">Tarragona</option>
            <option value="Teruel">Teruel</option>
            <option value="Toledo">Toledo</option>
            <option value="Valencia">Valencia</option>
            <option value="Valladolid">Valladolid</option>
            <option value="Vizcaya">Vizcaya</option>
            <option value="Zamora">Zamora</option>
            <option value="Zaragoza">Zaragoza</option>
          </select>
        </div>
        <div className="home__card__form-checkbox">
          <div className="form__radio form__group">
            <input
              className="form__radio-input"
              type="checkbox"
              id="acceptDecesos"
              name="acceptDecesos"
              checked={formData.acceptDecesos}
              onChange={handleChange}
              required
            />
            <label htmlFor="acceptDecesos" className="form__radio-label">
              {/* Rest of the label content */}
            </label>
          </div>
        </div>
        <button className="btn__icon btn1-big btn1-doctori-red submit" type="submit">Buscar</button>
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
             <Link to='/vida'> <div className="p">
                <a href="#coche" className="form__checkbox snipcss0-2-5-7 snipcss0-1-1-3" data-insurance="coche">
                  <input type="radio" name="insurance" value="coche" id="radio-coche" checked={selectedOption === 'coche'} onChange={handleOptionChange} />

                </a> <label htmlFor="radio-coche">Vida</label></div>
              </Link>
              <Link to='/viajie'>
              <div className="p">
                <a href="#moto" className="form__checkbox snipcss0-2-5-11 snipcss0-1-1-7" data-insurance="moto">
                  <input type="radio" name="insurance" value="moto" id="radio-moto" checked={selectedOption === 'moto'} onChange={handleOptionChange} />

                </a>  <label htmlFor="radio-moto">Viaje</label></div></Link>
                <Link to='/salud'>
              <div className="p">
                <a href="#salud" className="form__checkbox snipcss0-2-5-15 snipcss0-1-1-11" data-insurance="salud">
                  <input type="radio" name="insurance" value="salud" id="radio-salud" checked={selectedOption === 'salud'} onChange={handleOptionChange} />

                </a> <label htmlFor="radio-salud">Salud</label></div></Link>
                <Link to='/decesos'>
              <div className="p">
                <a href="#Decesos" className="form__checkbox snipcss0-2-5-15 snipcss0-1-1-11" data-insurance="Decesos">
                  <input type="radio" name="insurance" value="Decesos" id="radio-Decesos" checked={selectedOption === 'Decesos'} onChange={handleOptionChange} />

                </a>  <label htmlFor="radio-salud">Decesos</label></div></Link>
            </div>
          </nav>
        </div>        <br /><br /><br />
        {renderForm()}
      </div>
    </div>
  );
};

export default Desde;
