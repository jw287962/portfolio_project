import { skillImages } from "./skillImage";

const Skills = () => {
  const imgSize = 50;
  return (
    <div className="skillContainer">
      <h1>Skills </h1>
      <div class="skills">
        <p className="skill">
          REACT <img src={skillImages.reactlogo} height={imgSize}></img>
        </p>
        <p className="skill">
          JAVASCRIPT <img src={skillImages.javascript} height={imgSize}></img>
        </p>
        <p className="skill">
          HTML <img src={skillImages.html} height={imgSize}></img>
        </p>
        <p className="skill">
          CSS <img src={skillImages.css} height={imgSize}></img>
        </p>
      </div>

      <div class="skills">
        <p className="skill">
          NODEJS <img src={skillImages.nodejs} height={imgSize}></img>
        </p>
        <p className="skill">
          NPM <img src={skillImages.npm} height={imgSize}></img>
        </p>
        <p className="skill">
          WEBPACK <img src={skillImages.webpack} height={imgSize}></img>
        </p>
        <p className="skill">
          GIT <img src={skillImages.git} height={imgSize}></img>
        </p>
      </div>

      <div class="skills">
        <p className="skill">
          EXPRESS
          <img
            id="expressSkill"
            src={skillImages.express}
            height={imgSize}
          ></img>
        </p>
        <p className="skill">
          MONGODB <img src={skillImages.mongodb} height={imgSize}></img>
        </p>
        <p className="skill">
          MYSQL <img src={skillImages.mysql} height={imgSize}></img>
        </p>
        <p className="skill">
          RESTful API <img src={skillImages.rest} height={imgSize}></img>
        </p>
      </div>
    </div>
  );
};
export default Skills;
