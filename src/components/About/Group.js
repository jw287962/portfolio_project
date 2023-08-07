//
import "../../css/group.css";
import { useEffect, useState } from "react";

// use left = true || right is true to set into left or right??
const Group = ({ header, body, setHeaderText, setTextData }) => {
  // const [showText, setShowText] = useState(false);
  const onTextHover = () => {
    // setShowText(true);
    if (body && header) {
      setHeaderText(header);
      setTextData(body);
    }
  };
  // const onTextLeave = () => {
  //   setShowText(false);
  // };
  useEffect(() => {
    setHeaderText(header);
    setTextData(body);
    //
  }, []);

  return (
    <>
      <div className="group">
        <button className="header-button">
          <h4
            className="header"
            // onClick={onTextHover}
            onMouseEnter={onTextHover}
            onMouseLeave={() => {}}
          >
            <span dangerouslySetInnerHTML={{ __html: header }}></span>
            {/* {header} &nbsp; */}
            <div className="time-visual"></div>
            {header && <span className="time-mark"> </span>}
          </h4>

          <h4 className="empty-header"></h4>
        </button>
      </div>
    </>
  );
};

export default Group;
