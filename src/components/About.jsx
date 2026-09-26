function About() {
  return (
    <section id="sobre-mi">
      <h2>Sobre mí</h2>

      <div className="terminal">
        <div className="terminal-header">
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>

          <span className="terminal-title">martiniano@maoc:~</span>
        </div>

        <div className="terminal-body">
          <p>
            <span className="prompt">┌──(martiniano㉿maoc)-[~]</span>
          </p>

          <p>
            <span className="prompt">└─$ whoami</span>
          </p>

          <p className="terminal-output">Martiniano Ocampo</p>

          <p>
            <span className="prompt">└─$ profile</span>
          </p>

          <p className="terminal-output">
            Soy Martiniano Ocampo, desarrollador web en formación con interés en
            el desarrollo Full Stack y la ciberseguridad. Me gusta crear
            interfaces claras, funcionales y cuidadas, prestando atención tanto
            a la experiencia del usuario como a la calidad del código. <br />
            <br />
            Disfruto especialmente trabajar en proyectos donde se combinan
            diseño, lógica y resolución de problemas, buscando siempre que cada
            detalle tenga un propósito. Actualmente continúo ampliando mis
            conocimientos en tecnologías web, desarrollo de aplicaciones y
            hacking ético, con el objetivo de seguir creciendo y construyendo
            soluciones cada vez más completas
          </p>

          <p>
            <span className="prompt">└─$ technologies</span>
          </p>

          <p className="terminal-output">
            HTML · CSS · JavaScript · React · Git/GitHub · Linux
          </p>

          <p>
            <span className="prompt">└─$ status</span>
          </p>

          <p className="terminal-output">
            Aprendiendo, creando proyectos y mejorando continuamente.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
