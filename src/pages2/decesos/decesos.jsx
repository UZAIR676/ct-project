import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './decesos.css';

const Decesos = () => {
  const [selectedOption, setSelectedOption] = useState('Decesos');
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    acceptDecesos: false
  });

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (formValues.name && formValues.phone && formValues.email && formValues.age && formValues.acceptDecesos) {
      // Perform your submit logic here, like API calls or form reset
      console.log('Form submitted:', formValues);

      // Example: Resetting form after submission
      setFormValues({
        name: '',
        phone: '',
        email: '',
        age: '',
        acceptDecesos: false
      });
    } else {
      alert('Please fill out all fields before submitting.');
    }
  };

  const renderForm = () => {
    if (selectedOption === 'Decesos') {
      return (
        <div id="cardInsurance-decesos" className="home__card snipcss0-1-1-288 fadeIn card1--active snipcss0-0-0-1 snipcss-YAoXq">
          <div className="home__card__box-titles snipcss0-2-288-289 snipcss0-1-1-2">
            <span className="home__card__titles home__card__titles--1 snipcss0-3-289-290 snipcss0-2-2-3"> Contrata tu seguro de decesos desde 2,5€/mes </span>
          </div>
          <form onSubmit={handleSubmit} className="form home__card__form home__card__form--3 home__card__form--4 snipcss0-2-288-291 snipcss0-1-1-4" action="#" data-insurance-form="decesos" noValidate>
            <div className="form__group snipcss0-3-291-292 snipcss0-2-4-5">
              <input
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleInputChange}
                className="form__input snipcss0-4-292-293 snipcss0-3-5-6"
                placeholder="Nombre"
                tabIndex="1"
                required
              />
            </div>
            <div className="form__group snipcss0-3-291-294 snipcss0-2-4-7">
              <input
                name="phone"
                type="text"
                value={formValues.phone}
                onChange={handleInputChange}
                minLength="9"
                maxLength="9"
                className="form__input snipcss0-4-294-295 snipcss0-3-7-8"
                placeholder="Teléfono"
                tabIndex="1"
                required
              />
            </div>
            <div className="form__group snipcss0-3-291-296 snipcss0-2-4-9">
              <input
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleInputChange}
                maxLength="50"
                className="form__input snipcss0-4-296-297 snipcss0-3-9-10"
                placeholder="Email"
                tabIndex="1"
                required
              />
            </div>
            <div className="form__group snipcss0-3-291-298 snipcss0-2-4-11">
              <span className="form__error-tooltip snipcss0-4-298-299 snipcss0-3-11-12"></span>
              <input
                name="age"
                min="18"
                max="69"
                type="number"
                value={formValues.age}
                onChange={handleInputChange}
                className="form__input snipcss0-4-298-300 snipcss0-3-11-13"
                placeholder="Edad"
                tabIndex="1"
                required
              />
            </div>
            <div className="home__card__form-checkbox home__card__form-checkbox--2 snipcss0-3-291-412 snipcss0-2-4-125">
              <div className="form__radio form__group snipcss0-4-412-413 snipcss0-3-125-126">
                <input
                  className="form__radio-input snipcss0-5-413-414 snipcss0-4-126-127"
                  type="checkbox"
                  id="acceptDecesos"
                  name="acceptDecesos"
                  checked={formValues.acceptDecesos}
                  onChange={handleInputChange}
                  required
                />
               
                <div className="home__card__form-checkbox home__card__form-checkbox--2 snipcss0-3-142-270">
              <div className="form__radio form__group snipcss0-4-270-271">
                <input className="form__radio-input snipcss0-5-271-272" type="checkbox" id="acceptpolicy" name="acceptpolicy" value="1" required />
                <label htmlFor="acceptpolicy" className="form__radio-label snipcss0-5-271-273">
                  <span className="form__radio-element snipcss0-6-273-274"></span> <u className="snipcss0-6-273-275"><a href="/servicios" title="servicios" rel="nofollow" className="snipcss0-7-275-276"></a></u>  <b className="snipcss0-6-273-277"></b>  <b className="snipcss0-6-273-278"></b>  <b className="snipcss0-6-273-279"></b> <u className="snipcss0-6-273-280">
                    <a href="/entidades-aseguradoras" title="entidades aseguradoras" rel="nofollow" className="snipcss0-7-280-281"> </a>
                  </u>  <b className="snipcss0-6-273-282"></b> <a href="/politica-de-privacidad" title="política de privacidad" className="snipcss0-6-273-283">
                    <u className="snipcss0-7-283-284"> Acepto los términos y condiciones</u>
                  </a>
                </label>
              </div>
                          </div>
              </div>
            </div>
            <Link to='/decserach' >
            <button type="submit" className="btn__icon btn1-big btn1-doctori-red submit snipcss0-4-35-50"> Buscar </button></Link>
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
      <div className="contar-con">
        <h1>Decesos</h1>
        <div className="contar-con1">
          Los seguros de decesos son esenciales para garantizar que, en momentos de pérdida, las familias no se enfrenten a preocupaciones económicas adicionales. Este tipo de seguro cubre todos los costos asociados con el fallecimiento, incluyendo los gastos funerarios, servicios de entierro o cremación, y trámites legales. Al contar con un seguro de decesos, se alivia a los seres queridos de la carga financiera y administrativa en un momento de dolor y duelo, permitiéndoles enfocarse en el proceso de despedida y duelo sin el estrés de los gastos imprevistos. Además, los seguros de decesos suelen ofrecer servicios adicionales, como asesoría legal y apoyo psicológico, que son de gran ayuda para las familias en esos momentos difíciles.
          <br />
          <br />
          Contratar un seguro de decesos también refleja una planificación responsable y preventiva. Al asegurar que todos los aspectos relacionados con el deceso estén cubiertos, se evita que los familiares tengan que tomar decisiones apresuradas y costosas bajo presión emocional. Este tipo de póliza puede incluir, además, la repatriación del cuerpo en caso de fallecimiento en el extranjero, lo que asegura que los seres queridos puedan realizar las ceremonias fúnebres de acuerdo con sus deseos y tradiciones. En resumen, un seguro de decesos no solo proporciona un alivio económico significativo en momentos de pérdida, sino que también garantiza que se respeten los deseos finales de la persona fallecida, brindando paz y serenidad a la familia.
        </div>
      </div>
    </div>
  );
};

export default Decesos;
