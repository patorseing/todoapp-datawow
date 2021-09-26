import { fetchData } from "./fetchData";
import { ADD_DATA } from "../contexts/AppState";

export const addData = async (dispatch, task) => {
  // You can await here
  try {
    await fetch(`${window.env.API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    await dispatch({ type: ADD_DATA, payload: task });
    await fetchData(dispatch);
  } catch (err) {
    alert(err.message);
  }
};
