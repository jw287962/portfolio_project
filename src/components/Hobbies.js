import medal from "../img/medal logo.png";

const Hobbies = () => {
  return (
    <div>
      <h1>Hobbies</h1>
      <h4 className="flexrow centerxy hobbiesMargin">
        <div class="left">Sports</div>{" "}
        <div class="right">
          <ul>
            <li> Volleyball </li>
            <li>Sprinting</li>
            <li>Open to Other Sports</li>
          </ul>
        </div>
      </h4>
      <h4 className="flexrow centerxy hobbiesMargin">
        <div class="left">Reading</div>{" "}
        <div class="right">
          <ul>
            <li>Novels </li>
            <li>Manga</li>
            <li>Self-Study/Learning</li>
          </ul>
        </div>
      </h4>
      <h4 className="flexrow centerxy hobbiesMargin">
        <div class="left">Valorant</div>
        <div class="right  flexycenter flexrow flexend">
          <ul>
            <li>Immortal 1 (Act Card Complete)</li>
            <li>Total Act Wins: 41</li>
            <li>Last Played: Nov 2022</li>
          </ul>
          <a href="https://medal.tv/u/Veracid">
            <img
              className="weblink circle"
              height="40"
              width="40"
              src={medal}
            ></img>
          </a>
        </div>
      </h4>
    </div>
  );
};
export default Hobbies;
