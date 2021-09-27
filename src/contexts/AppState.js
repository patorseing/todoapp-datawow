import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const display = {
  true: { display: "grid" },
  false: { display: "none" },
};

export const menu = ["All", "Done", "Undone"];
export const CHANGE_MENU = "CHANGE MENU";
export const menuConditions = (menu, todo) =>
  ({
    All: true,
    Done: !!todo.completed,
    Undone: !todo.completed,
  }[menu]);

export const LOADING = "LOADING";

export const Loading = {
  true: (
    <span className="loading">
      <FontAwesomeIcon icon="spinner" />
    </span>
  ),
  false: <></>,
};

export const LOAD_DATA = "LOAD DATA";
export const ADD_DATA = "ADD DATA";
