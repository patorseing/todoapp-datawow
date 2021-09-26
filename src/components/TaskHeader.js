import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuButton } from "./menuButton";
import { AppContext } from "../contexts/AppContext";
import { CHANGE_MENU, Loading } from "../contexts/AppState";
import { fetchData } from "../services/fetchData";

export const TaskHeader = () => {
  const menu = ["All", "Done", "Undone"];
  const [show, setShow] = useState(false);
  const { state, dispatch } = useContext(AppContext);

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

  const changeFilter = (changedMenu) => {
    dispatch({ type: CHANGE_MENU, payload: changedMenu });
    toggleHandler();
    fetchData(dispatch);
  };

  return (
    <div className="col-s-9 box-task">
      <p className="col-10 col-s-7 task">
        Tasks {Loading[state.loading]}
      </p>
      <div className="col-2 col-s-5 dropdown">
        <button className="col-s-12 dropbtn" onClick={toggleHandler}>
          <p className="col-s-11">{state.menu}</p>
          <FontAwesomeIcon icon="chevron-down" className="col-1 col-s-1" />
        </button>
        <div
          className="dropdown-content col-1 col-m-2 col-s-3"
          style={ToggleShowStyles(show)}
        >
          {menu.map((m, i) => (
            <MenuButton
              main={state.menu}
              expect={m}
              fnc={changeFilter}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
