import "../CSS/Contact.css"; // Asegúrate de tener tu archivo CSS para estilos
const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes implementar la lógica para manejar el envío del formulario
    // Por ejemplo, enviar datos a un servidor, mostrar un mensaje de éxito, etc.
    console.log("Formulario enviado");
  };

  return (
    <>
    <div className="contact-page-container">
      <p className="contact-page-text">
        Si desea más información acerca de nuestra oferta de seguros, no dude
        en contactarnos.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input type="text" id="apellidos" name="apellidos" required />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4"  />
        </div>
        <button type="submit">Enviar</button>
      </form>
    
    </div>
    
    </>
  );
};

export default ContactPage;
