function TechCard({ titulo, imagen }) {
  return (
    <div className="tech-card">
      <div className="tech-card__image-wrapper">
        <img
          className="tech-card__image"
          src={imagen}
          alt={`Logo de ${titulo}`}
        />
      </div>

      <h5 className="tech-card__title">{titulo}</h5>
    </div>
  );
}

export default TechCard;
