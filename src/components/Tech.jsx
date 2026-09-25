import TechCard from "./TechCard";

// titulo e imagen

function Tech() {
  return (
    <section id="tech">
      <h2>Tecnologías</h2>

      <TechCard
        titulo="HTML"
        imagen="https://tse2.mm.bing.net/th/id/OIP._ZcQAAEnaJvq4ka7HrpM8AHaHa?r=0&w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3"
      />
      <TechCard
        titulo="CSS"
        imagen="https://tse1.mm.bing.net/th/id/OIP.jiuXfQfSdjrIoV_6YQ4LNwHaHa?r=0&w=920&h=920&rs=1&pid=ImgDetMain&o=7&rm=3"
      />
      <TechCard
        titulo="JavaScript"
        imagen="https://tse3.mm.bing.net/th/id/OIP.g7J-f7bMgDNXoXNGVMV7WwHaKv?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
      />
      <TechCard
        titulo="REACT"
        imagen="https://tse1.mm.bing.net/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
      />
      <TechCard
        titulo="Git/GitHub"
        imagen="https://tse4.mm.bing.net/th/id/OIP.8SVgggxQcO5L6Dw_61ac4QHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
      />
      <TechCard
        titulo="Linux"
        imagen="https://cdn-icons-png.flaticon.com/512/6124/6124995.png"
      />
    </section>
  );
}
export default Tech;
