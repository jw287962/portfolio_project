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
    return Math.floor(
      (new Date(1997, 11) - new Date()) / 1000 / 60 / 60 / 365 / 24
    );
  }
  return (
    <main className="about">
      <img src={jason} height="250px"></img>
      <div className="hidden">
        <h1>About Jason </h1>
        <p>
          Although I graduated as a Management Information Systems graduate at
          the University of Georgia in 2020, I did not pursue a job in my field.
          I am currently {calculateAge()} years old and have discovered a new
          passion in software development. You can view my projects
          <a href="/portfolio_project/Home"> here</a>. You can read about my
          journey below.
        </p>
      </div>
      <div className="hidden">
        <h4>Jan 2022 - Before The Odin Project</h4>
        <p>
          After joining Juicy Seafood as a manager, I worked exhausting hours,
          typically ranging from 70 to 80 hours per week until September 2022.
          Thankfully, I have reduced my workload to around 60-65+ hours per week
          around August. With a bit more time on my hands, I started playing
          Valorant and achieved an impressive feat of reaching Immortal 1 within
          just 40 Wins and 1 Act (2 months). This accomplishment made me realize
          that despite my grueling work schedule, I possess qualities such as
          teamwork, competitiveness, self-drive, and an inherent drive for
          self-improvement. These traits were evident in my swift progress in
          Valorant, a team-based competitive shooter. However, the lack of
          work-life balance and the feeling of wasting my time compelled me to
          explore new career opportunities.
        </p>
      </div>
      <div className="hidden">
        <h4>Nov 2022 - The Odin Project</h4>
        <p>
          In November 2022, I wholeheartedly immersed myself in The Odin
          Project, and the experience has been incredibly enjoyable. I have
          relished the opportunity to learn and create various projects, and I
          am eager to delve into a professional setting where I can apply my
          skills. You can explore my projects on this website, with additional
          ones available on my GitHub profile. Despite working 60+ hours a week,
          I remained committed and dedicated to the path of learning by
          completing these projects, showcasing my unwavering drive and passion
          for software development. I eagerly anticipate leveraging my skills
          and furthering my skills as a software developer.
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
