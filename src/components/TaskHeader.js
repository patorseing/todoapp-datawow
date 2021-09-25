import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TaskHeader = () => {
  const [show, setShow] = useState(false);
  const [main, setMain] = useState("All");

  const display = {
    true: "grid",
    false: "none",
  };

  const ToggleShowStyles = (showed) => ({
    display: display[showed],
  });

  const toggleHandler = () => {
    setShow(!show);
  };

  const changeFilter = (menu) => {
    setMain(menu);
    toggleHandler();
  };

  return (
    <div className="col-s-9 box-task">
      <p className="col-10 col-s-7 task">Tasks</p>
      <div className="col-2 col-s-5 dropdown">
        <button className="col-s-12 dropbtn" onClick={toggleHandler}>
          <p className="col-s-11">{main}</p>
          <FontAwesomeIcon icon="chevron-down" className="col-1 col-s-1" />
        </button>
        <div
          className="dropdown-content col-1 col-m-2 col-s-3"
          style={ToggleShowStyles(show)}
        >
          <button className="col-s-12" onClick={() => changeFilter("All")}>
            <p>All</p>
          </button>
          <button className="col-s-12" onClick={() => changeFilter("Done")}>
            <p>Done</p>
          </button>
          <button className="col-s-12" onClick={() => changeFilter("Undone")}>
            <p>Undone</p>
          </button>
        </div>
      </div>
    </div>
  );
};
