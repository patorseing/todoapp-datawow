import { useState, useContext } from "react";
import { CheckBox } from "./checkBox";
import { EllipsisH } from "../res/ellipsisH";
import { display } from "../contexts/AppState";
import { MenuButton } from "./menuButton";
import { AddTodoField } from "./addTodo";
import { deleteData } from "../services/crudData";
import { AppContext } from "../contexts/AppContext";

export const ToDoItem = (props) => {
  const { task } = props;
  const { dispatch } = useContext(AppContext);
  const [showEdit, setShowEdit] = useState(false);
  const [show, setShow] = useState(false);
  const inputStyle = {
    true: {
      textDecorationLine: "line-through",
      color: "#A9A9A9",
    },
    false: {
      color: "black",
    },
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

  const toggleHandler = () => {
    setShow(!show);
  };

  const component = {
    true: (
      <AddTodoField
        todo={task}
        switchShow={setShowEdit}
      />
    ),
    false: (
      <div className="root-container">
        <div className="input-container">
          <div className="box-checklist">
            <div className="checkbox">
              <CheckBox task={task} />
            </div>
            <div className="box-checklist-show">
              <p className="todofield" style={inputStyle[task.completed]}>
                {task.title}
              </p>
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
  return component[showEdit];
};
