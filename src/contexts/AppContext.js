import {createContext} from "react";

export const initialState = {
  menu: "All",
  loading: false,
  todoList: [],
  completed: 0,
  total: 0,
}
export const AppContext = createContext(initialState);
