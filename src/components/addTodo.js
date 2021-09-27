import { useState, useContext, useEffect } from "react";
import { addData } from "../services/addData";
import { updateData } from "../services/updateData";
import { AppContext } from "../contexts/AppContext";

export const AddTodoField = (props) => {
  const initTodo = { title: "", completed: false };
  const { todo, switchShow } = props;
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [task, setTask] = useState(initTodo);
  const { dispatch } = useContext(AppContext);

  const func = {
    true: (task) => {
      updateData(dispatch, task);
      switchShow(false);
    },
    false: (task) => {
      addData(dispatch, task);
    },
  };

  useEffect(() => {
    const checkSetEdit = () => {
      if (todo) {
        setTask(todo);
        setEdit(true);
        setShow(true);
      }
    };
    checkSetEdit();
  }, [todo]);

  const handleChange = (e) => {
    setTask({ ...task, title: e.target.value });
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      const og = task;
      try {
        func[edit](task);
        setTask(initTodo);
        setShow(false);
      } catch (error) {
        setTask(og);
      }
    }
  };

  const handleSave = () => {
    const og = task;
    try {
      func[edit](task);
      setTask(initTodo);
      setShow(false);
    } catch (error) {
      setTask(og);
    }
  };

  const display = {
    true: "grid",
    false: "none",
  };

  const ToggleShowStyles = (showed) => ({
    display: display[showed],
  });

  return (
    <div className="col-s-9 box-checklist box-checklist-input">
      <div className="col-s-8 col-m-10">
        <input
          className="todofield"
          type="text"
          name="todo"
          placeholder="Add your todo..."
          onKeyDown={keyPress}
          value={task.title}
          onChange={handleChange}
          onBlur={() => {
            setShow(false);
          }}
          onFocus={() => {
            setShow(true);
          }}
        />
      </div>
      <div className="col-s-4 col-m-2" style={{ textAlign: "right" }}>
        <button
          className="save-btn"
          onClick={handleSave}
          style={ToggleShowStyles(show)}
        >
          Save
        </button>
      </div>
    </div>
  );
};
