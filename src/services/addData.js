import { fetchData } from "./fetchData";
import { ADD_DATA } from "../contexts/AppState";

export const addData = async (dispatch, task) => {
  // You can await here
  try {
    const res = await fetch(`${window.env.API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const todo = await res.json();
    await dispatch({ type: ADD_DATA, payload: todo });
    await fetchData(dispatch);
  } catch (err) {
    alert(err.message);
  }
};
