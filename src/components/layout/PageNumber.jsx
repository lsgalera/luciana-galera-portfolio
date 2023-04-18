import { useState, useEffect } from "react";
import "./PageNumber.css";

export default function PageNumber() {
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    let heightToHideFrom = 720; // TODO: obtener el alto de la section
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      console.log("AAA");
      setPageNumber(2);
    } else {
      setPageNumber(1);
    }
  };

  return (
    <>
      <div className="number_container">
        <div id="hide">0{pageNumber}</div>
      </div>
      <div className="line_container"></div>
    </>
  );
}
