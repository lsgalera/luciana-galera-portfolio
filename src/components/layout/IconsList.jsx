import "./IconsList.css";

export default function IconsList() {
  return (
    <div className="icons_list">
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
        href="https://github.com/lsgalera"
        className="svg_link_decor"
        target="blank"
      >
        <img src="/icons8-github.svg" alt="GitHub icon" className="svg_link" />
      </a>
      <a href="https://www.linkedin.com/in/luciana-galera/" target="blank">
        <img
          src="/download-circle-svgrepo-com.svg"
          alt="CV download icon"
          className="svg_link_download svg_link_decor"
        />
      </a>
    </div>
  );
}
