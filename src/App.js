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
          <p className="col-10 col-s-8 task">Tasks</p>
          <div className="col-2 col-s-4 dropdown">
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
        <div className="col-9 col-s-9">
          <div className="col-12">
            <svg className="checkbox-symbol">
              <symbol id="check" viewbox="0 0 12 10">
                <polyline
                  points="1.5 6 4.5 9 10.5 1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polyline>
              </symbol>
            </svg>

            <input className="checkbox-input" id="todo" type="checkbox" />
            <label className="checkbox box-checklist" for="todo">
              <span>
                <svg
                  width="12px"
                  height="10px"
                  dangerouslySetInnerHTML={{
                    __html: '<use xlink:href="#check"></use>',
                  }}
                />
              </span>
              <input type="text" name="todo" value="Publish a new blog" />
              <button className="edit">
                <FontAwesomeIcon icon="ellipsis-h" />
              </button>
            </label>
          </div>
        </div>
        <div className="col-9 col-s-9 box-input"></div>
      </div>
    </div>
  );
}

export default App;
