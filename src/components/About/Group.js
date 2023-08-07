//
import "../../css/group.css";
import { useEffect, useState } from "react";

// use left = true || right is true to set into left or right??
const Group = ({ header, body, setHeaderText, setTextData, setDefault }) => {
  // const [showText, setShowText] = useState(false);
  const onTextHover = () => {
    // setShowText(true);
    if (body && header) {
      setHeaderText(header);
      setTextData(body);
    }
  };
  const useInitialLoad = () => {
    const [initialLoad] = useState(true);

    useEffect(() => {
      if (setDefault) {
        setHeaderText(header);
        setTextData(body);
      }
    }, [initialLoad]);
  };

  useInitialLoad();

  return (
    <>
      <div className="group">
        <button className="header-button">
          <h4
            className="header"
            // onClick={onTextHover}
            onMouseEnter={onTextHover}
            onMouseLeave={() => {}}
            dangerouslySetInnerHTML={{ __html: header }}
          ></h4>
          {/* <div className="time-visual"></div> */}
        </button>
      </div>
    </>
  );
};

export default Group;
