import { useContext } from "react";
import { Checked } from "../res/checked";
import { Unchecked } from "../res/unchecked";
import { AppContext } from "../contexts/AppContext";
import { updateData } from "../services/crudData";
import PropTypes from "prop-types"

export const CheckBox = ({ task }) => {
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

CheckBox.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })
}
