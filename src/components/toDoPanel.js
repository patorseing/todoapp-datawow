import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { ToDoItem } from "./ToDoItem";

export const TodoPanel = () => {
  const { state } = useContext(AppContext);

  return state.todoList.map((task, i) => <ToDoItem task={task} key={i} />);
};
