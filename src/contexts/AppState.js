import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CHANGE_MENU = "CHANGE MENU";
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
export const UPDATE_DATA = "UPDATE DATA";
