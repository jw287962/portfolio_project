import Icon from "@mdi/react";
import { mdiFilePdfBox } from "@mdi/js";
// import medal from "../img/medal logo.png";

const ContactMe = () => {
  return (
    <>
      <h1>Contact Me</h1>
      <div className="infoContainer centerxy">
        <h4 className="flexrow">
          <div className="left">Email</div>
          <div className="right">jason.wongdevwork@gmail.com</div>
        </h4>

        <h4 className="flexrow centerxy">
          <span className="left">Resume</span>
          <div className="right">
            <a
              className="imgLink"
              href="https://docs.google.com/document/d/0Bz4ixU0mSpzJNnlpSENuVzlGVEE/edit?resourcekey=0-dbVkzmv5MgXhl2TphCfHkw"
            >
              <Icon path={mdiFilePdfBox} size={2} alt="Jason's Resume" />
            </a>
          </div>
        </h4>
      </div>
    </>
  );
};

export default ContactMe;
