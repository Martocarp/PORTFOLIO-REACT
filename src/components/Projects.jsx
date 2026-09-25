import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="proyectos">
      <h2>Proyectos</h2>

      <ProjectCard
        titulo="Estudio Juridico SGR"
        descripcion="Landing page de estudio juridico de Tucuman"
        tecnologias="HTML · CSS · JS"
        imagen="../../public/SGR.png"
      />

      <ProjectCard
        titulo="Estudio Juridico KMA"
        descripcion={"Landing page de estudio juridico de Tucuman"}
        tecnologias={"HTML · CSS · JS"}
        imagen="https://w0.peakpx.com/wallpaper/533/94/HD-wallpaper-missing-textures-garrysmod-gmod.jpg"
      />

      <ProjectCard
        titulo="BOGAPP"
        descripcion="Sistema para estudios jurídicos y clientes."
        tecnologias="HTML · CSS · JavaScript · SQL · REACT"
        imagen="https://w0.peakpx.com/wallpaper/533/94/HD-wallpaper-missing-textures-garrysmod-gmod.jpg"
      />

      <ProjectCard
        titulo="Wiki-API DARK SOULS"
        descripcion="API publicada enfocada en el videojuego DARK SOULS"
        tecnologias="HTML · CSS · JavaScript · JSON"
        imagen="https://wallpaperaccess.com/full/718529.jpg"
      />
    </section>
  );
}

export default Projects;
