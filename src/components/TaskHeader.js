import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuButton } from "./menuButton";
import { AppContext } from "../contexts/AppContext";
import { menu, display, CHANGE_MENU, Loading } from "../contexts/AppState";

export const TaskHeader = () => {
  const [show, setShow] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const toggleHandler = () => {
    setShow(!show);
  };

  const changeFilter = (changedMenu) => {
    dispatch({ type: CHANGE_MENU, payload: changedMenu });
    toggleHandler();
  };

  return (
    <div className="box-task">
      <div className="task-container">
        <p className="task">Tasks</p>
        <p className="loading-icon">{Loading[state.loading]}</p>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleHandler}>
            <p>{state.menu}</p>
            <FontAwesomeIcon icon="chevron-down" title="chevron-down" />
          </button>
        </div>
        <div className="dropdown-content" style={{ ...display[show] }}>
          <div className="group">
            {menu.map((m, i) => (
              <MenuButton main={state.menu} expect={m} fnc={changeFilter} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
