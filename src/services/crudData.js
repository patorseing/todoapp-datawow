import { ADD_DATA, LOAD_DATA, LOADING } from "../contexts/AppState";

export const createData = async (dispatch, task) => {
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
    await readData(dispatch);
  } catch (err) {
    alert(err.message);
  }
};

export const readData = async (dispatch) => {
  // You can await here
  dispatch({ type: LOADING });
  try {
    const response = await fetch(window.env.API_URL);
    const todoList = await response.json();
    dispatch({ type: LOAD_DATA, payload: todoList });
  } catch (err) {
    alert(err.message);
    dispatch({ type: LOAD_DATA, payload: [] });
  }
};

export const updateData = async (dispatch, task) => {
  // You can await here
  try {
    await fetch(`${window.env.API_URL}/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    await readData(dispatch);
  } catch (err) {
    alert(err.message);
  }
};

export const deleteData = async (dispatch, id) => {
  // You can await here
  try {
    await fetch(`${window.env.API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
    await readData(dispatch)
  } catch (err) {
    alert(err.message);
  }
};
