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

  const toggleHandler = () => {
    setShow(!show);
  };

  const handleCheck = () => {
    const updateBody = { ...props.task };
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
      fnc: () => {
        deleteData(dispatch, task.id);
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
      <div className="root-container">
        <div className="input-container">
          <div className="box-checklist">
            <CheckSymbol />
            <input
              className="checkbox-input"
              id={`todo-${task.id}`}
              type="checkbox"
              defaultChecked={task.completed}
              onChange={() => {
                handleCheck();
              }}
            />
            <label className="checkbox" htmlFor={`todo-${task.id}`}>
              <span>
                <CheckBox />
              </span>
            </label>
            <div className="box-checklist-show">
              <input
                className="todofield"
                type="text"
                defaultValue={task.title}
                disabled
                style={{ ...inputStyle[task.completed] }}
              />
            </div>
            <div className="toolkit-edit">
              <button
                className="edit"
                aria-haspopup="true"
                onClick={toggleHandler}
              >
                <EllipsisH />
              </button>
              <div className="dropdown-edit" style={{ ...display[show] }}>
                <div className="group-edit">
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
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return item[showEdit];
};
