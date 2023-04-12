import "./ProjectsPage.css";
import ProjectCard from "../ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="container" id="projects-section">
      <div>
        <h2 className="left_column_subtitle">Featured projects</h2>
        <div className="projects_container">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}
