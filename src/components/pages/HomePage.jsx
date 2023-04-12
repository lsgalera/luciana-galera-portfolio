import "./HomePage.css";

const src = "/profile_image.png";

export default function HomePage() {
  return (
    <section className="main_container">
      <div className="left_column">
        <h2 className="left_column_subtitle">Hello! I'm</h2>
        <h1 className="left_column_title">
          <span className="title_bracket">&#123;</span> Luciana Sabrina Galera{" "}
          <span className="title_bracket">&#125;</span>
        </h1>

        <p className="left_column_p">
          A <span>frontend developer</span> based in Buenos Aires, Argentina.
          With a passion for design and innovative solutions that can make a
          difference in people's lives, I'm always looking forward to new
          challenges. I am excited to connect with other professionals and
          continue learning and growing in my career. If you're looking for a
          dedicated developer who can bring your ideas to life, I'd be happy to
          discuss how I can help. Feel free to get in touch with me to learn
          more about my skills and experience, or to discuss your project in
          more detail.
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
