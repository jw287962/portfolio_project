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
  function calculateAge() {
    console.log((new Date(1997, 11) - new Date()) / 1000 / 60 / 60 / 365 / 24);
    return Math.floor(
      (new Date() - new Date(1997, 11)) / 1000 / 60 / 60 / 365 / 24
    );
  }
  return (
    <main className="about">
      <img src={jason} height="250px"></img>
      <div className="hidden">
        <h1>About Jason </h1>
        <p>
          Although I graduated with a Bachelor's in Management Information
          Systems from the University of Georgia in 2020, I did not pursue a job
          in my field. I faced challenges with my confidence and often succumbed
          to fear, which resulted in missed internship opportunities and a
          tendency to avoid problems. I have since developed and refined
          essential soft skills after becoming a franchisee owner from 2020 to
          2021. I am {calculateAge()} years old and have discovered a new
          passion in software development. You can view my projects
          <a href="/portfolio_project/Home"> here</a>. You can read about my
          journey below.
        </p>
      </div>
      <div className="hidden">
        <h4>Jan 2022 - Before The Odin Project</h4>
        <p>
          After joining Juicy Seafood as a manager, I worked exhausting hours,
          typically between 70 to 80 hours per week. Around August 2022, I
          finally reduced my hours to around 60+ per week. With a bit more spare
          time, I started playing Valorant, a team-based competitive shooter.
          Consequently, I finished my Immortal 1 (Top 1%) Act Card after ~40
          Wins and two months (1 Act) of gameplay. This achievement highlighted
          qualities such as collaboration, competitiveness, self-motivation, and
          an innate desire for growth. It also sparked a strong aspiration to
          pursue a new career. One where I can actively pursue personal growth,
          face and overcome challenges, and enjoy.
        </p>
      </div>
      <div className="hidden">
        <h4>Nov 2022 - The Odin Project</h4>
        <p>
          As a result, in November 2022, I wholeheartedly immersed myself in The
          Odin Project. The experience has been incredible. I have relished the
          opportunity to learn and create various projects, and I am eager to
          delve into a professional setting where I can apply and develop my
          skills further. You can explore my projects on this website, with more
          available on my GitHub profile. Despite working 60+ hours a week, I
          remained committed and dedicated to learning by completing these
          projects, showcasing my unwavering passion for software development. I
          eagerly anticipate leveraging and furthering my skills as a software
          developer.
        </p>
      </div>

      <Skills></Skills>

      <div className="hidden">
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
                href="https://drive.google.com/file/d/1bjNT04nRN40tVUWpYk3QJbxz_6KiNF4J/view?usp=share_link"
              >
                <Icon path={mdiFilePdfBox} size={2} alt="Jason's Resume" />
              </a>
            </div>
          </h4>
        </div>
        <Hobbies></Hobbies>
      </div>
    </main>
  );
};

export default About;
