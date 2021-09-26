import { LOAD_DATA, LOADING } from "../contexts/AppState";

export const fetchData = async (dispatch) => {
  // You can await here
  dispatch({ type: LOADING });
  const response = await fetch(window.env.API_URL);
  const todoList = await response.json();
  dispatch({ type: LOAD_DATA, payload: todoList });
};
