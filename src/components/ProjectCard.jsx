function ProjectCard({ titulo, descripcion, tecnologias, imagen }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imagen} className="card-img-top" alt={titulo} />

      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <p>{tecnologias}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
