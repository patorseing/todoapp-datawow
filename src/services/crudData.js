import {
  ADD_DATA,
  LOAD_DATA,
  LOADING,
  UPDATE_DATA,
  REMOVE_DATA,
} from "../contexts/AppState";
import { v4 as uuidv4 } from "uuid";

export const createData = async (dispatch, task) => {
  // You can await here
  try {
    task.id = uuidv4();
    fetch(`${window.env.API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    dispatch({ type: ADD_DATA, payload: task });
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
    await dispatch({ type: LOAD_DATA, payload: todoList });
  } catch (err) {
    alert(err.message);
    dispatch({ type: LOAD_DATA, payload: [] });
  }
};

export const updateData = async (dispatch, task) => {
  // You can await here
  try {
    fetch(`${window.env.API_URL}/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    dispatch({ type: UPDATE_DATA, payload: task });
  } catch (err) {
    alert(err.message);
  }
};

export const deleteData = async (dispatch, id) => {
  // You can await here
  try {
    fetch(`${window.env.API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: REMOVE_DATA, payload: id });
  } catch (err) {
    alert(err.message);
  }
};
