import "./ProjectCard.css";

export default function ProjectCard() {
  return (
    <div className="project_card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
        alt="placeholder"
      />
      <h3>Nombre de proyecto</h3>
      <p>
        Esto es un ejemplo de descripcion de mi proyecto. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Voluptatibus saepe iusto officia
        corrupti delectus necessitatibus blanditiis ratione, totam dignissimos
        porro praesentium illum at, voluptatum quis quae quos maxime dolorum
        dolorem.
      </p>
    </div>
  );
}
