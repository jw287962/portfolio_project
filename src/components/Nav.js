import "../css/nav.css";
import { Link } from "react-router-dom";

// IMAGES FOR NAVLINK
import github from "../img/Github.png";
import linkedin from "../img/Linkedin.png";
// MATERIAL ICON FOR NAVLINK
import Icon from "@mdi/react";
import { mdiFilePdfBox } from "@mdi/js";
import { useState, useEffect, useRef } from "react";

const Nav = () => {
  let prevScrollPos = useRef(window.scrollY);
  const [toggleNav, setToggleNav] = useState(true);
  const [snapshotAnimate, setSnapshotAnimate] = useState(true);

  const selected = (e) => {
    setSnapshotAnimate(true);
    const eventTarget = e.target.htmlFor;
    if (eventTarget) {
      const radio = document.getElementById(eventTarget);
      // css turns checked to blue color and bigger
      radio.checked = true;
    }
    setTimeout(() => {
      setSnapshotAnimate(false);
    }, 50);
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((ele, i) => {
      const curr = window.location.href;
      if (curr.includes(ele.id) || i === 0) {
        ele.checked = true;
      }
    });

    setSnapshotAnimate(false);
    const handleScroll = (event) => {
      if (
        window.scrollY < prevScrollPos.current ||
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      ) {
        setToggleNav(true);
      } else {
        setToggleNav(false);
      }
      prevScrollPos.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* camera looking snapshot */}
      <div className={`${!snapshotAnimate ? "animation" : ""} top-layer`}></div>

      <nav
        className={`mainNav ${toggleNav === true ? "visible" : "notvisible"} `}
      >
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
                <input
                  type="radio"
                  id="home"
                  name="home"
                  className="nav-link"
                ></input>
                <label htmlFor="home">Home</label>
              </Link>
            </button>
            <button onClick={selected}>
              <Link to={{ pathname: "/about" }}>
                <input
                  type="radio"
                  id="about"
                  name="home"
                  className="nav-link"
                ></input>
                <label htmlFor="about">About</label>
              </Link>
            </button>
            <a className="imgLink" href="https://github.com/jw287962">
              <img height="40" width="40" src={github} alt="github logo"></img>
            </a>
            <a
              className="imgLink"
              href="https://www.linkedin.com/in/jason-wong-a796a2175/"
            >
              <img
                height="40"
                width="40"
                src={linkedin}
                alt="linkedIn logo"
              ></img>
            </a>
            <a
              className="imgLink"
              href="https://docs.google.com/document/d/0Bz4ixU0mSpzJNnlpSENuVzlGVEE/edit?resourcekey=0-dbVkzmv5MgXhl2TphCfHkw"
            >
              <Icon path={mdiFilePdfBox} size={2} alt="Jason's Resume" />
            </a>
          </div>
        </form>
      </nav>
    </>
  );
};

export default Nav;
