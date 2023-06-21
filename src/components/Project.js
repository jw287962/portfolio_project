import arrow from "../img/arrow.png";
import github from "../img/Github.png";

const Project = ({ projectImage, liveWebsite, gitLink, text }) => {
  return (
    <h3 className="hidden">
      <div className="links">
        <img src={projectImage} className="projects"></img>
        <div className="bottomBox">
          <h3>{text}</h3>
          <div>
            <a href="https://twitter-clone-33714.web.app/">
              <img className="weblink" height="30" width="30" src={arrow}></img>
            </a>
            <a href="https://github.com/jw287962/twitter-clone">
              <img height="38" width="38" src={github}></img>
            </a>
          </div>
        </div>
      </div>
    </h3>
  );
};

export default Project;
