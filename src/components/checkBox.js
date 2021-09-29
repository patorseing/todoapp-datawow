import { useContext } from "react";
import { Checked } from "../res/checked";
import { Unchecked } from "../res/unchecked";
import { AppContext } from "../contexts/AppContext";
import { updateData } from "../services/crudData";

export const CheckBox = (props) => {
  let { task } = props;
  const { dispatch } = useContext(AppContext);

  const item = {
    true: <Checked />,
    false: <Unchecked />,
  };
  return (
    <span
      onClick={() => {
        updateData(dispatch, { ...task, completed: !task.completed });
      }}
    >
      {item[task.completed]}
    </span>
  );
};
