import { Link } from "react-router-dom";
import "../css/about.css";
import Nav from "./Nav";
import { useEffect } from "react";

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
          field. I am currently 25 years old, and have discovered a new passion,
          programming, through The Odin Project. 'You can view my projects{" "}
          <a href="/portfolio_project/Home">here</a>. I am always eager for a
          challenge, finding enjoyment in problem solving and learning new
          things. Outside of programming, I enjoy hobbies such as playing sports
          and games.
        </p>
      </div>
      <div className="hidden">
        <h4>Jan 2022 - Before The Odin Project</h4>
        <p>
          I started working at Juicy Seafood, a restaurant, where I was a
          manager. After working 70-80 Hours a week until September of 2022, I
          was able to lower that to around 60 hours a week... Thank God! With a
          little more time to spare, I started playing Valorant and eventually
          reached Immortal 1 in just a few months. At this point, having reached
          the top 1%, and feeling like I've been wasting my time with no
          improvement in my personal life, I began looking elsewhere. However,
          traits such as competitiveness, self-drive, and an innate desire for
          self-improvement have always been following me through these periods.
          With that, I decided to put my efforts in something new. This is when
          I decided to really dive into TOP.
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
          despite working 60 hour weeks, and I would love to apply my skills
          further as a software developer.
        </p>
      </div>

      <Skills></Skills>

      <div className="hidden">
        <h1>Contact Me:</h1>
        <h4>
          <strong>Email</strong>: jason.wongdevwork@gmail.com
        </h4>
      </div>
    </main>
  );
};

export default About;
