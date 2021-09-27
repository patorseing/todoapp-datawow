import { useState, useContext } from "react";
import { MenuButton } from "./menuButton";
import { updateData, deleteData } from "../services/crudData";
import { AppContext } from "../contexts/AppContext";
import { AddTodoField } from "./addTodo";
import { display } from "../contexts/AppState";
import { CheckSymbol } from "../res/checkSymbol";
import { CheckBox } from "../res/checkBox";
import { EllipsisH } from "../res/ellipsisH";

export const ToDoItem = (props) => {
  const inputStyle = {
    true: {
      textDecorationLine: "line-through",
      color: "#A9A9A9",
    },
    false: {
      color: "black",
    },
  };
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const { dispatch } = useContext(AppContext);

  const [task, setTask] = useState(props.task);

  const [complete, setCompleted] = useState(task.completed);

  const toggleHandler = () => {
    setShow(!show);
  };

  const handleCheck = () => {
    const completed = !complete;
    const updateBody = { ...props.task, completed };
    setCompleted(completed);
    setTask(updateBody);
    updateData(dispatch, updateBody);
  };

  const menus = [
    {
      menu: "Edit",
      fnc: () => {
        setShowEdit(true);
        toggleHandler();
      },
    },
    {
      menu: "Delete",
      fnc: (id) => {
        deleteData(dispatch, id);
        toggleHandler();
      },
    },
  ];

  const item = {
    true: (
      <AddTodoField
        todo={task}
        switchShow={setShowEdit}
        setTaskItem={setTask}
      />
    ),
    false: (
      <div className="col-s-9">
        <CheckSymbol />
        <input
          className="checkbox-input"
          id={`todo-${task.id}`}
          type="checkbox"
          defaultChecked={complete}
          onChange={() => {
            handleCheck();
          }}
        />
        <label className="checkbox box-checklist" htmlFor={`todo-${task.id}`}>
          <span>
            <CheckBox />
          </span>
          <input
            className="todofield"
            type="text"
            defaultValue={task.title}
            disabled
            style={{ ...inputStyle[complete] }}
          />
          <div className="col-1 col-m-2 col-s-3">
            <button className="col-s-12 edit" onClick={toggleHandler}>
              <EllipsisH />
            </button>
            <div
              className="col-1 col-m-2 col-s-3 dropdown-edit"
              style={{ ...display[show] }}
            >
              {menus.map((menu, i) => (
                <MenuButton
                  expect={menu.menu}
                  fnc={menu.fnc}
                  main={task.id}
                  key={i}
                />
              ))}
            </div>
          </div>
        </label>
      </div>
    ),
  };

  return item[showEdit];
};
