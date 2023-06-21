import { Link } from "react-router-dom";
// Project Images
import battleship from "../img/battleship.png";
import twitter from "../img/twitterclone.png";
import weather from "../img/weather.png";
import todo from "../img/todo.png";
import calculator from "../img/calculator.png";
import knights from "../img/knight.png";
import Nav from "./Nav";
import arrow from "../img/arrow.png";
import github from "../img/Github.png";
import waldo from "../img/waldo.png";
//

import Project from "./Project";
import Hobbies from "./Hobbies";

import { useEffect } from "react";

import Icon from "@mdi/react";
import { mdiFilePdfBox } from "@mdi/js";
import Skills from "./Skills";
const Main = () => {
  useEffect(() => {
    let options = {
      rootMargin: "300px",
    };
    const observer = new IntersectionObserver((entries, options) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  });
  return (
    <main>
      <base target="_blank"></base>
      <div className="intro">
        <h1>
          Hi, I'm <span className="jason">Jason</span>
        </h1>
        <h1>I'm a software developer. </h1>
        <div>
          <button
            className="rotate"
            onClick={(e) => {
              const project = document.querySelector(".home").previousSibling;
              project.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {">"}
          </button>
        </div>
      </div>

      <h1>Jason's Projects</h1>

      <div className="home">
        <Project
          projectImage={twitter}
          text={"Twitter Clone"}
          liveWebsite={"https://twitter-clone-33714.web.app/"}
          gitLink={"https://github.com/jw287962/twitter-clone"}
        ></Project>

        <Project
          projectImage={weather}
          text={"Weather Site"}
          liveWebsite={"https://jw287962.github.io/weather_ReactJS/"}
          gitLink={"https://github.com/jw287962/weather_ReactJS/tree/master"}
        ></Project>

        <Project
          projectImage={battleship}
          text={"Battleship Game"}
          liveWebsite={"https://jw287962.github.io/battleship/"}
          gitLink={"https://github.com/jw287962/battleship"}
        ></Project>

        <Project
          projectImage={knights}
          text={"Knight Travails"}
          liveWebsite={"https://jw287962.github.io/knight_travails/"}
          gitLink={"https://github.com/jw287962/knight_travails"}
        ></Project>

        <Project
          projectImage={calculator}
          text={"Calculator"}
          liveWebsite={"https://jw287962.github.io/calculator/"}
          gitLink={"https://github.com/jw287962/calculators"}
        ></Project>

        <Project
          projectImage={waldo}
          text={"Where's Waldo"}
          liveWebsite={"https://jw287962.github.io/angularWaldo/"}
          gitLink={"https://github.com/jw287962/angularWaldo"}
        ></Project>
      </div>

      <Skills></Skills>

      <h1>Contact Me</h1>
      <div className="infoContainer centerxy">
        <h4 className="flexrow">
          <div className="left">Email</div>
          <div className="right">jason.wongdevwork@gmail.com</div>
        </h4>
        <h4 className="flexrow centerxy">
          <span className="left">Resume</span>
          <div className="right">
            <a
              className="imgLink"
              href="https://drive.google.com/file/d/1oBFNvUJ9Mahf-eqOoG6llNDY3DcUwPix/view?usp=drive_link"
            >
              <Icon path={mdiFilePdfBox} size={2} alt="Jason's Resume" />
            </a>
          </div>
        </h4>
      </div>

      <Hobbies></Hobbies>
    </main>
  );
};

export default Main;
