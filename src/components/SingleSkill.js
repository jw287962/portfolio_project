const SingleSkill = ({ logo }) => {
  const imgSize = 50;
  return (
    <p className="skill">
      {logo.name} <img src={logo.picture} height={imgSize}></img>
    </p>
  );
};

export default SingleSkill;
