import "./ProjectsPage.css";
import ProjectCard from "../ProjectCard";

export default function ProjectsPage() {
  return (
    <section id="projects-section">
      <div className="middle_column">
        <div>
          <h2 className="subtitle">Featured projects</h2>
          <div className="cards_container">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
}
