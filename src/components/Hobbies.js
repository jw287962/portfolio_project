import medal from "../img/medal logo.png";

const Hobbies = () => {
  return (
    <div>
      <h1>Hobbies</h1>
      <h4 className="flexrow centerxy hobbiesMargin">
        <div className="left">Sports</div>{" "}
        <div className="right">
          <ul>
            <li> Volleyball </li>
            <li>Sprinting</li>
            <li>Open to Other Sports</li>
          </ul>
        </div>
      </h4>
      <h4 className="flexrow centerxy hobbiesMargin">
        <div className="left">Reading</div>{" "}
        <div className="right">
          <ul>
            <li>Novels </li>
            <li>Manga</li>
            <li>Self-Study/Learning</li>
          </ul>
        </div>
      </h4>
      <h4 className="flexrow centerxy hobbiesMargin">
        <div className="left">Valorant</div>
        <div className="right  flexycenter flexrow flexend">
          <ul>
            <li>Immortal 1 (Act Card Complete)</li>
            <li>Total Act Wins: 41</li>
            <li>Last Played: Nov 2022</li>
          </ul>
          <a href="https://medal.tv/u/Veracid">
            <img
              className="weblink circle"
              height="35"
              width="35"
              src={medal}
              alt="Link to Medal.tv"
            ></img>
          </a>
        </div>
      </h4>
    </div>
  );
};
export default Hobbies;
