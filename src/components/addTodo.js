import { useState, useContext } from "react";
import { addData } from "../services/addData";
import { AppContext } from "../contexts/AppContext";

export const AddTodoField = () => {
  const [task, setTask] = useState("");
  const { dispatch } = useContext(AppContext);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      const og = task;
      // put the login here
      try {
        addData(dispatch, { title: og, completed: false });
        setTask("");
      } catch (error) {
        setTask(og);
      }
    }
  };

  return (
    <div className="col-s-9 box-checklist box-checklist-input">
      <input
        className="col-s-11 todofield"
        type="text"
        name="todo"
        placeholder="Add your todo..."
        onKeyDown={keyPress}
        value={task}
        onChange={handleChange}
      />
    </div>
  );
};
