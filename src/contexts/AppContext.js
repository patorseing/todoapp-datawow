import {createContext} from "react";

export const initialState = {
  menu: "All",
  loading: false,
  todoList: [],
  totalToDoList: [],
  completed: 0,
  total: 0,
}
export const AppContext = createContext(initialState);
