import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export const Progress = () => {
  const { state } = useContext(AppContext);
  const { completed, total } = state;

  const containerStyles = {
    width: "100%",
    backgroundColor: "#3b3b3b",
    borderRadius: "999px",
  };

  const fillerStyles = {
    height: "0.5rem",
    width: `${(completed / total) * 100}%`,
    backgroundColor: "#ffffff",
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div className="col-9 col-s-9 box-progress">
      <p className="progress">
        Progress
      </p>
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
      <p className="completed">{completed} completed</p>
    </div>
  );
};
