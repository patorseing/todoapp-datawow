export const Progress = (props) => {
  const { completedNum, allNum } = props;

  const containerStyles = {
    width: "100%",
    backgroundColor: "#3b3b3b",
    borderRadius: "999px",
  };

  const fillerStyles = {
    height: "0.5rem",
    width: `${(completedNum / allNum) * 100}%`,
    backgroundColor: "#ffffff",
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div className="col-9 col-s-9 box-progress">
      <p className="progress">Progress</p>
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
      <p className="completed">{completedNum} completed</p>
    </div>
  );
};
