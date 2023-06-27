import { skillImages } from "./skillImage";
import SingleSkill from "./SingleSkill";
import "../css/skills.css";

const Skills = () => {
  // const imgSize = 50;
  return (
    <div className="skillContainer">
      <h1>Skills </h1>
      {skillImages.map((ele, i) => {
        return (
          <div className="skills" key={`skills${i}`}>
            {ele.map((skills) => (
              <SingleSkill logo={skills} key={`${skills.name}`}></SingleSkill>
            ))}
          </div>
        );
      })}
    </div>
  );
};
export default Skills;
