import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const completed = 12;
  const all = 15;
  const containerStyles = {
    width: "100%",
    backgroundColor: "#3b3b3b",
    borderRadius: "999px",
  };

  const fillerStyles = {
    height: "0.5rem",
    width: `${(completed / all) * 100}%`,
    backgroundColor: "#ffffff",
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div className="App">
      <div className="col-6 col-m-8 col-s-10 box">
        <div className="col-9 col-s-9 box-progress">
          <p className="progress">Progress</p>
          <div style={containerStyles}>
            <div style={fillerStyles}></div>
          </div>
          <p className="completed">{completed} completed</p>
        </div>
        <div className="col-9 col-s-9 box-task">
          <p className="col-10 col-s-9 task">Tasks</p>
          <div className="col-2 col-s-3 dropdown">
            <button className="col-12 col-s-12 dropbtn">
              <p className="col-11 col-s-11">Undone</p>
              <FontAwesomeIcon icon="chevron-down" className="col-1 col-s-1" />
            </button>
            <div className="dropdown-content col-1 col-m-2 col-s-3">
              <a href="/">
                <p className="col-12">All</p>
              </a>
              <a href="/">
                <p className="col-12">Done</p>
              </a>
              <a href="/">
                <p className="col-12">Undone</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
