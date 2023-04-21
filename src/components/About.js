import "../css/about.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";

// Components
import Nav from "./Nav";
import Hobbies from "./Hobbies";

// Images & Material Icons
import Icon from "@mdi/react";
import { mdiFilePdfBox } from "@mdi/js";
import medal from "../img/medal logo.png";
import jason from "../img/jason.png";
import Skills from "../components/Skills";

const About = () => {
  useEffect(() => {
    let options = {};
    const observer = new IntersectionObserver((entries, options) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  });

  return (
    <main className="about">
      <img src={jason} height="250px"></img>
      <div className="hidden">
        <h1>About Jason </h1>
        <p>
          Although I graduated as a Management Information Systems graduate at
          University of Georgia in 2020, I ended up not pursuing a job in my
          field. I am currently 25 years old, and have discovered a new passion
          in programming. 'You can view my projects
          <a href="/portfolio_project/Home">here</a>.
        </p>
      </div>
      <div className="hidden">
        <h4>Jan 2022 - Before The Odin Project</h4>
        <p>
          I started working at Juicy Seafood, a restaurant, where I was a
          manager. After working 70-80 Hours a week until September of 2022, I
          was able to lower that to around 60 - 65+ hours a week... Thank God!
          With a little more time to spare, I started playing Valorant and
          eventually reached Immortal 1 in just 2-3 months. At this point,
          having reached the top 1%, and feeling like I've been wasting my time
          with horrible work-life balance, I started to look for a new passion.
          However, traits such as competitiveness, self-drive, and an innate
          desire for self-improvement have always been following me through
          these periods as evident in my rapid pace in Valorant. With that, I
          decided to put my efforts in something new. This is when I decided to
          really dive into TOP.
        </p>
      </div>
      <div className="hidden">
        <h4>Nov 2022 - The Odin Project</h4>
        <p>
          I truly started engaging with The Odin Project around Nov 2022. As I
          solved problem after problem, I soon realized how much fun it is. I
          have enjoyed making all the different projects, and I am looking to do
          more in a proffessional setting. You can view my projects on this
          website (with more on Github). It was fun completing these projects
          despite working 60 hour weeks, and I look foward to applying my skills
          further as a software developer.
        </p>
      </div>

      <Skills></Skills>

      <div className="hidden">
        <h1>Contact Me</h1>
        <h4 className="infoContainer centerxy">
          <h4 className="flexrow">
            <div className="left">Email</div>
            <div className="right">jason.wongdevwork@gmail.com</div>
          </h4>

          <h4 className="flexrow centerxy">
            <span className="left">Resume</span>
            <div className="right">
              <a
                className="imgLink"
                href="https://drive.google.com/file/d/1bjNT04nRN40tVUWpYk3QJbxz_6KiNF4J/view?usp=share_link"
              >
                <Icon path={mdiFilePdfBox} size={2} alt="Jason's Resume" />
              </a>
            </div>
          </h4>
        </h4>
        <Hobbies></Hobbies>
      </div>
    </main>
  );
};

export default About;
