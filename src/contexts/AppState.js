import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const display = {
  true: { display: "grid" },
  false: { display: "none" },
};

export const menu = ["All", "Done", "Undone"];
export const CHANGE_MENU = "CHANGE MENU";

export const LOADING = "LOADING";

export const Loading = {
  true: (
    <span className="loading">
      <FontAwesomeIcon icon="spinner" title="spinner"/>
    </span>
  ),
  false: <></>,
};

export const LOAD_DATA = "LOAD DATA";
export const ADD_DATA = "ADD DATA";

export const UPDATE_DATA = "UPDATE DATA";
export const REMOVE_DATA = "REMOVE DATA";
