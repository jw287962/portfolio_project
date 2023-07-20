// import { Link } from "react-router-dom";
// Project Images
import battleship from "../img/battleship.png";
import twitter from "../img/twitterclone.png";
import weather from "../img/weather.png";
// import calculator from "../img/calculator.png";
import smoothDining from "../img/SmoothDining.png";
import knights from "../img/knight.png";

import waldo from "../img/waldo.png";
import react from "../img/skills/react.png";
import express from "../img/skills/express.png";
import angular from "../img/skills/angular.png";
import typescript from "../img/skills/typescript.svg";

//Component
import Project from "./Project";
import Hobbies from "./Hobbies";
import ContactMe from "./ContactMe";

import { useEffect, useState, useRef } from "react";

// import Icon from "@mdi/react";
// import { mdiFilePdfBox } from "@mdi/js";
import Skills from "./Skills";
const mytext = [
  "a software developer.",
  "a quick learner.",
  "a problem solver.",
];
const Main = ({ ignore }) => {
  const [updateIntroInterval, setUpdateIntroInterval] = useState("");
  let num = useRef(0);
  let index = useRef(0);
  let toggle = useRef(true);

  const [intro, setIntro] = useState(mytext[index.current]);
  // let options = {
  //   rootMargin: "0px",
  // };
  useEffect(() => {
    if (!ignore) {
      const observer = new IntersectionObserver((entries, options) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      });

      const hiddenElements = document.querySelectorAll(".hidden");
      hiddenElements.forEach((el) => observer.observe(el));
    }
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
          projectImage={smoothDining}
          text={"SmoothDining"}
          liveWebsite={"https://smoothdining.netlify.app/#/home"}
          gitLink={"https://github.com/jw287962/smoothDiningAngular"}
          backendLink={"https://github.com/jw287962/smoothdining_API"}
          backendImage={express}
          frameworkArray={[angular, typescript, express]}
        ></Project>

        <Project
          projectImage={weather}
          text={"Weather Site"}
          liveWebsite={"https://jw287962.github.io/weather_ReactJS/"}
          gitLink={"https://github.com/jw287962/weather_ReactJS/tree/master"}
          framework={react}
        ></Project>
        <Project
          projectImage={twitter}
          text={"Twitter Clone"}
          liveWebsite={"https://twitter-clone-33714.web.app/"}
          gitLink={"https://github.com/jw287962/twitter-clone"}
          framework={react}
        ></Project>
        <Project
          projectImage={waldo}
          text={"Where's Waldo"}
          liveWebsite={"https://jw287962.github.io/angularWaldo/"}
          gitLink={"https://github.com/jw287962/angularWaldo"}
          frameworkArray={[angular, typescript]}
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
      </div>

      <Skills></Skills>

      <ContactMe></ContactMe>

      <Hobbies></Hobbies>
    </main>
  );
};

export default Main;
