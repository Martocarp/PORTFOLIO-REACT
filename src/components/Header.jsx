function Header() {
  return (
    <header className="sidebar-header">
      <div className="header-brand">
        <h2>MAOC_</h2>
        <p>Desarrollador FULL STACK y Hacker Ético</p>
      </div>

      <nav className="vertical-nav">
        <a className="nav-link" href="#hero">
          Sobre mí
        </a>

        <a className="nav-link" href="#tech">
          Tecnologías
        </a>

        <a className="nav-link" href="#proyectos">
          Proyectos
        </a>

        <a className="nav-link" href="#contacto">
          Contacto
        </a>
      </nav>
    </header>
  );
}

export default Header;
