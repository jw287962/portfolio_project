import arrow from "../img/arrow.png";
import github from "../img/Github.png";
import "../css/project.css";

const Project = ({
  projectImage,
  liveWebsite,
  gitLink,
  text,
  framework,
  frameworkArray,
}) => {
  return (
    <h3 className="hidden">
      <div className="links">
        {framework && (
          <img
            className="framework"
            height="30"
            width="30"
            src={framework}
            alt=""
          ></img>
        )}
        <div className="frameworkArray">
          {frameworkArray &&
            frameworkArray.map((ele) => {
              return <img height="30" width="30" src={ele} alt=""></img>;
            })}
        </div>

        <img
          src={projectImage}
          className="projects"
          alt="a project website"
        ></img>
        <div className="bottomBox">
          <h3>{text}</h3>

          <div>
            <a href={`${liveWebsite}`}>
              <img
                className="weblink"
                height="30"
                width="30"
                src={arrow}
                alt="Live Site Link"
              ></img>
            </a>
            <a href={`${gitLink}`}>
              <img height="38" width="38" src={github} alt="Github link"></img>
            </a>
          </div>
        </div>
      </div>
    </h3>
  );
};

export default Project;
