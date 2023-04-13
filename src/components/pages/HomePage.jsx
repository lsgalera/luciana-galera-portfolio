import "./HomePage.css";

export default function HomePage() {
  return (
    <section id="main-section">
      <div className="middle_column">
        <div className="text_container">
          <h2 className="subtitle">Hello! I'm</h2>
          <h1 className="middle_column_title">
            <span className="title_bracket">&#123;</span> Luciana Sabrina Galera{" "}
            <span className="title_bracket">&#125;</span>
          </h1>
          <h3 className="middle_column_p">
            A <span>frontend developer</span> based in Buenos Aires, Argentina.
            With a passion for design and innovative solutions, I'm always
            looking forward to new challenges. With +1 year of experience as a
            software developer, I am excited to keep learning and growing in my
            career. If you're looking for a dedicated developer who can bring
            your ideas to life, I'd be happy to discuss how I can help. Feel
            free to get in touch with me to learn more about my skills and
            experience, or to discuss your project in more detail.
          </h3>

          <div className="buttons_container">
            <button className="primary_button" href="#projects-section">
              Contact me
            </button>
            <a
              href="#projects-section"
              className="secondary_button hover_underline_animation"
            >
              My projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
