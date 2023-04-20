import "../css/nav.css";
import { Link } from "react-router-dom";
import github from "../img/Github.png";
import linkedin from "../img/Linkedin.png";

import Icon from "@mdi/react";
import { mdiFilePdfBox } from "@mdi/js";
const Nav = () => {
  return (
    <nav className="mainNav">
      <h1>Jason Wong</h1>

      <ul className="navList">
        <li>
          <Link to={{ pathname: "/Home" }}>Home </Link>
        </li>
        <li>
          <Link to={{ pathname: "/about" }}>About </Link>
        </li>
        <li className="image">
          <a className="imgLink" href="https://github.com/jw287962">
            <img height="40" width="40" src={github}></img>
          </a>
        </li>
        <li className="image">
          <a
            className="imgLink"
            href="https://www.linkedin.com/in/jason-wong-a796a2175/"
          >
            <img height="40" width="40" src={linkedin}></img>
          </a>
        </li>
        <li className="image">
          <a
            className="imgLink"
            href="https://drive.google.com/file/d/1bjNT04nRN40tVUWpYk3QJbxz_6KiNF4J/view?usp=share_link"
          >
            <Icon path={mdiFilePdfBox} size={2} alt="Jason's Resume" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
