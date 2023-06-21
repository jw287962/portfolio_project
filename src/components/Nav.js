import "../css/nav.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

// IMAGES FOR NAVLINK
import github from "../img/Github.png";
import linkedin from "../img/Linkedin.png";
// MATERIAL ICON FOR NAVLINK
import Icon from "@mdi/react";
import { mdiFilePdfBox } from "@mdi/js";
const Nav = () => {
  const selected = (e) => {
    const eventTarget = e.target.htmlFor;
    if (eventTarget) {
      const radio = document.getElementById(eventTarget);
      radio.checked = true;
    }
  };

  useEffect(() => {}, []);
  return (
    <nav className="mainNav">
      <h1>Jason Wong</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/* <label className="navList"></label> */}

        <div className="navList">
          <button onClick={selected}>
            <Link to={{ pathname: "/home" }}>
              <input type="radio" id="home" name="home"></input>
              <label htmlFor="home">Home</label>
            </Link>
          </button>

          <button onClick={selected}>
            <Link to={{ pathname: "/about" }}>
              <input type="radio" id="about" name="home"></input>
              <label htmlFor="about">About</label>
            </Link>
          </button>

          <a className="imgLink" href="https://github.com/jw287962">
            <img height="40" width="40" src={github}></img>
          </a>

          <a
            className="imgLink"
            href="https://www.linkedin.com/in/jason-wong-a796a2175/"
          >
            <img height="40" width="40" src={linkedin}></img>
          </a>
          <a
            className="imgLink"
            href="https://docs.google.com/document/d/0Bz4ixU0mSpzJNnlpSENuVzlGVEE/edit?resourcekey=0-dbVkzmv5MgXhl2TphCfHkw"
          >
            <Icon path={mdiFilePdfBox} size={2} alt="Jason's Resume" />
          </a>
        </div>
      </form>

      {/* <ul className="navList">
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
      </ul> */}
    </nav>
  );
};

export default Nav;
