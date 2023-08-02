import "../css/about.css";

// import { Link } from "react-router-dom";
import { useEffect } from "react";
import ContactMe from "./ContactMe";
// Components
import Hobbies from "./Hobbies";

// Images & Material Icons

import jason from "../img/jason.png";
import Skills from "../components/Skills";

const About = () => {
  useEffect(() => {
    // let options = {};
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
      <img src={jason} height="250px" alt=""></img>
      <div className="hidden">
        <h1>- Achievements - </h1>
        <h4>Coin Mart for Discord Game | 2020-2021</h4>
        <p>
          {"\t"}Developed a successful scripting program that seamlessly worked
          alongside a Discord bot, automating gameplay and generating in-game
          currency for a Discord game. Employed image matching techniques to
          ensure precise decision-making during gameplay. Achieved an
          approximate revenue of <strong>$25,000</strong> in 2020 with minimal
          overhead costs, despite the challenges posed by COVID-19.
        </p>
        <h4>Solo Projects | Self-Taught since Nov 2022</h4>
        <p>
          {"\t"}As a self-taught developer since November 2022, I embarked on
          solo projects while working overtime at Juicy Seafood. My full-stack
          applications incorporated essential authentication features like JWT
          Tokens, OAuth, and custom registration/login while adhering to CORs
          policy. I tackled applied problem-solving projects such as Knight
          Travails, demonstrating proficiency in data structures and algorithms.
          My dedication to continuous learning drives me to explore online
          resources and engage in hands-on work to enhance my skills further.
        </p>
        <ul>
          <li></li>
        </ul>
        <h1> - About Jason -</h1>
        <h4> After Graduation | </h4>
        <p>
          {"\t"}Although I graduated with a Bachelor's in Management Information
          Systems from the University of Georgia in 2020, I did not pursue a job
          in my field. I faced challenges with my confidence and often succumbed
          to fear, which resulted in missed opportunities and a tendency to
          avoid problems since a young age. I have since developed and refined
          essential soft skills after becoming a franchisee owner from 2020 to
          2022. I am {calculateAge()} years old, and I started seriously
          self-studying software development since November 2022. This has led
          me to discover a new passion in software development. You can view my
          projects&nbsp;
          <a href="/portfolio_project/Home">here</a> and read about my journey
          below.
        </p>
      </div>
      <div className="hidden">
        <h4>Jan 2022 - Before The Odin Project </h4>
        <p>
          {"\t"}After joining Juicy Seafood as a manager, I worked exhausting
          hours, typically between 70 to 80 hours per week with a lack of
          employees due to the ongoing pandemic. Around August 2022, I reduced
          my hours to around 60+ per week. With a bit more spare time, I started
          playing Valorant, a team-based competitive shooter. Consequently, I
          finished my Immortal 1 (Top 1%) Act Card after ~40 Wins and two months
          (1 Act) of gameplay. This achievement highlighted qualities such as
          collaboration, competitiveness, self-motivation, and an innate desire
          for growth. During my time in the restaurant industry, I learned to
          overcome my fears that had continously taken control over my life.
          With this out of the way, a desire for a new career had been lit
          aflame. I decided to put my passion into software development.
        </p>
      </div>
      <div className="hidden">
        <h4>Nov 2022 - The Odin Project</h4>
        <p>
          {"\t"}As a result, in November 2022, I wholeheartedly immersed myself
          in The Odin Project while maintaing 60+ hours a week at Juicy Seafood.
          Throughout this process, I have relished the opportunity to learn and
          create various projects. And, I am eager to delve into a professional
          setting where I can apply and develop my skills further alongside
          talented professionals. You can explore my projects on this website,
          with more available on my GitHub profile. Despite working 60+ hours a
          week, I remained committed and dedicated to learning by completing
          these projects, showcasing my unwavering passion for software
          development. I eagerly anticipate leveraging and furthering my skills
          as a software developer.
        </p>
      </div>

      <Skills></Skills>

      <div className="hidden">
        <ContactMe></ContactMe>
        <Hobbies></Hobbies>
      </div>
    </main>
  );
};

export default About;
