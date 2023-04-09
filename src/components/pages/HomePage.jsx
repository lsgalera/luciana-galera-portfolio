import "./HomePage.css";

const src = "/profile_picture.jpeg";

export default function HomePage() {
  return (
    <section className="container">
      <div className="left_column">
        <h1 className="left_column_title">
          <span className="title_bracket">&#123;</span> Luciana Sabrina Galera{" "}
          <span className="title_bracket">&#125;</span>
        </h1>
        <h2 className="left_column_subtitle">Software developer</h2>
        <p className="left_column_p">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat." "Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        </p>
        <div className="buttons_container">
          <a href="#projects-section">
            <button className="primary_button">Contact me</button>
          </a>
          <a
            href="#projects-section"
            className="secondary_button hover_underline_animation"
          >
            My projects
          </a>
        </div>
      </div>
      <div className="right_column">
        <img src={src} alt="Luciana Sabrina Galera" className="profile_img" />

        <div className="icon_list">
          <a
            href="https://www.linkedin.com/in/luciana-galera/"
            className="svg_link_decor"
            target="blank"
          >
            <img
              src="/icons8-linkedin-rodeado-de-círculo.svg"
              alt="LinkedIn icon"
              className="svg_link"
            />
          </a>
          <a
            href="https://www.github.com/lsgalera"
            className="svg_link_decor"
            target="blank"
          >
            <img
              src="/icons8-github.svg"
              alt="GitHub icon"
              className="svg_link"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/luciana-galera/"
            className="svg_link_decor"
            target="blank"
          >
            <img
              src="/download-circle-svgrepo-com.svg"
              alt="LinkedIn icon"
              className="svg_link_download"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
