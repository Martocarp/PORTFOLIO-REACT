import TechCard from "./TechCard";

function Tech() {
  const tecnologias = [
    {
      id: 1,
      titulo: "HTML",
      imagen:
        "https://tse2.mm.bing.net/th/id/OIP._ZcQAAEnaJvq4ka7HrpM8AHaHa?r=0&w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 2,
      titulo: "CSS",
      imagen:
        "https://tse1.mm.bing.net/th/id/OIP.jiuXfQfSdjrIoV_6YQ4LNwHaHa?r=0&w=920&h=920&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 3,
      titulo: "JavaScript",
      imagen:
        "https://tse3.mm.bing.net/th/id/OIP.g7J-f7bMgDNXoXNGVMV7WwHaKv?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 4,
      titulo: "React",
      imagen:
        "https://tse1.mm.bing.net/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 5,
      titulo: "Git / GitHub",
      imagen:
        "https://tse4.mm.bing.net/th/id/OIP.8SVgggxQcO5L6Dw_61ac4QHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 6,
      titulo: "Linux",
      imagen: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png",
    },
  ];

  return (
    <section id="tech">
      <h2>Tecnologías</h2>

      {tecnologias.map((tecnologia) => (
        <TechCard
          key={tecnologia.id}
          titulo={tecnologia.titulo}
          imagen={tecnologia.imagen}
        />
      ))}
    </section>
  );
}

export default Tech;
