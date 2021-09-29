import { useState, useContext, useEffect } from "react";
import { createData, updateData } from "../services/crudData";
import { AppContext } from "../contexts/AppContext";
import { display } from '../contexts/AppState';
import classNames from "classnames";

export const AddTodoField = (props) => {
  const { todo, switchShow, setTaskItem } = props;
  const initTodo = { title: "", completed: false };
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [task, setTask] = useState(initTodo);
  const { dispatch } = useContext(AppContext);

  const func = {
    true: () => {
      updateData(dispatch, task);
      switchShow(false);
      setTaskItem(task);
    },
    false: () => {
      createData(dispatch, task);
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

  const save = () => {
    const og = task;
    try {
      func[edit](task);
      setTask(initTodo);
      setShow(false);
    } catch (error) {
      setTask(og);
    }
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      save();
    }
  };

  const handleSave = () => {
    save();
  };

  return (
    <div className={classNames('input-container', {"last": !edit})}>
      <div className="box-checklist">
        <div className="box-checklist-input">
          <input
            className="todofield"
            type="text"
            name="todo"
            placeholder="Add your todo..."
            onKeyDown={keyPress}
            value={task.title}
            onChange={handleChange}
            onFocus={() => {
              setShow(true);
            }}
          />
        </div>
        <div className='box-checklist-save' style={{...display[show]}}>
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
