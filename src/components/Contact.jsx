function Contact() {
  return (
    <section id="contacto">
      <h2>Contactame acá</h2>

      <div className="contact-links">
        <a
          href="https://github.com/MartoCarp"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          LinkedIn
        </a>

        <a
          href="https://wa.me/3815606259"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          WhatsApp
        </a>
      </div>

      <form
        action="mailto:marto.github@gmail.com"
        method="post"
        encType="text/plain"
      >
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" />
        </div>

        <div>
          <label htmlFor="email">Asunto</label>
          <input type="email" id="email" name="email" />
        </div>

        <div>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje"></textarea>
        </div>

        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
}

export default Contact;
