import { Link } from "react-router-dom";
// Project Images
import battleship from "../img/battleship.png";
import twitter from "../img/twitterclone.png";
import weather from "../img/weather.png";
import todo from "../img/todo.png";
import calculator from "../img/calculator.png";
import knights from "../img/knight.png";
import Nav from "./Nav";

import waldo from "../img/waldo.png";
import react from "../img/skills/react.png";
import angular from "../img/skills/angular.png";
//

import Project from "./Project";
import Hobbies from "./Hobbies";

import { useEffect, useState, useRef } from "react";

import Icon from "@mdi/react";
import { mdiFilePdfBox } from "@mdi/js";
import Skills from "./Skills";

const Main = () => {
  const [updateIntroInterval, setUpdateIntroInterval] = useState("");
  let num = useRef(0);
  let index = useRef(0);
  let toggle = useRef(true);
  const mytext = [
    "a software developer.",
    "a quick learner.",
    "a problem solver.",
  ];

  const [intro, setIntro] = useState(mytext[index.current]);
  useEffect(() => {
    let options = {
      rootMargin: "0px",
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

  useEffect(() => {
    const timer = setInterval(() => {
      if (toggle.current) {
        setUpdateIntroInterval(updateIntroInterval + intro[num.current++]);
      } else {
        setUpdateIntroInterval(intro.substring(0, --num.current));
      }
      if (intro.length === num.current || num.current === 0) {
        toggle.current = !toggle.current;
      }
      if (num.current === 0) {
        index.current++;
        index.current = index.current % mytext.length;
        setIntro(mytext[index.current]);
      }
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, [intro, updateIntroInterval]);
  return (
    <main>
      <base target="_blank"></base>
      <div className="intro">
        <h1>
          Hi, I'm <span className="jason">Jason</span>
        </h1>
        <h1 className="introText">
          I'm {updateIntroInterval} <span className="cursor">|</span>
        </h1>
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
          framework={react}
        ></Project>

        <Project
          projectImage={weather}
          text={"Weather Site"}
          liveWebsite={"https://jw287962.github.io/weather_ReactJS/"}
          gitLink={"https://github.com/jw287962/weather_ReactJS/tree/master"}
          framework={react}
        ></Project>
        <Project
          projectImage={waldo}
          text={"Where's Waldo"}
          liveWebsite={"https://jw287962.github.io/angularWaldo/"}
          gitLink={"https://github.com/jw287962/angularWaldo"}
          framework={angular}
        ></Project>
        <Project
          projectImage={knights}
          text={"Knight Travails"}
          liveWebsite={"https://jw287962.github.io/knight_travails/"}
          gitLink={"https://github.com/jw287962/knight_travails"}
        ></Project>

        <Project
          projectImage={battleship}
          text={"Battleship Game"}
          liveWebsite={"https://jw287962.github.io/battleship/"}
          gitLink={"https://github.com/jw287962/battleship"}
        ></Project>

        <Project
          projectImage={calculator}
          text={"Calculator"}
          liveWebsite={"https://jw287962.github.io/calculator/"}
          gitLink={"https://github.com/jw287962/calculators"}
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
