//
import "../../css/group.css";
import { useEffect } from "react";

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
            dangerouslySetInnerHTML={{ __html: header }}
          ></h4>
          <div className="time-visual"></div>
          {header && <span className="time-mark"> </span>}

          <div className="empty-header"></div>
        </button>
      </div>
    </>
  );
};

export default Group;
