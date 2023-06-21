import { skillImages } from "./skillImage";
import SingleSkill from "./SingleSkill";
import "../css/skills.css";

const Skills = () => {
  const imgSize = 50;
  return (
    <div className="skillContainer">
      <h1>Skills </h1>
      {skillImages.map((ele) => {
        return (
          <div className="skills">
            {ele.map((skills) => (
              <SingleSkill logo={skills}></SingleSkill>
            ))}
          </div>
        );
      })}
    </div>
  );
};
export default Skills;
