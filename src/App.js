import "./App.css";
import { useReducer, useEffect } from "react";
import { Progress } from "./components/progressPanel";
import { TaskHeader } from "./components/taskHeader";
import { AppContext, initialState } from "./contexts/AppContext";
import {reducer} from "./contexts/AppReducer";
import {fetchData} from './services/fetchData'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() =>{ // adjust args to your needs
    fetchData(dispatch);
  }, [])

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="App">
        <div className="col-6 col-m-8 col-s-10 box">
          <Progress />
          <TaskHeader />
          {/* <div className="col-s-9">
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
            <input
              className="col-11 col-m-10 col-m-9 todofield"
              type="text"
              name="unchecked"
              value="Buy food for dinner"
              disabled
            />
            <div className="col-1 col-m-2 col-s-3">
              <button className="col-s-12 edit">
                <svg
                  width="20"
                  height="6"
                  viewBox="0 0 20 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.19944 2.99986C5.19944 3.63638 4.94659 4.24683 4.4965 4.69692C4.04641 5.147 3.43596 5.39986 2.79944 5.39986C2.16293 5.39986 1.55248 5.147 1.10239 4.69692C0.652301 4.24683 0.399445 3.63638 0.399445 2.99986C0.399445 2.36334 0.652301 1.75289 1.10239 1.30281C1.55248 0.852718 2.16293 0.599861 2.79944 0.599861C3.43596 0.599861 4.04641 0.852718 4.4965 1.30281C4.94659 1.75289 5.19944 2.36334 5.19944 2.99986ZM12.3994 2.99986C12.3994 3.63638 12.1466 4.24683 11.6965 4.69692C11.2464 5.147 10.636 5.39986 9.99944 5.39986C9.36293 5.39986 8.75248 5.147 8.30239 4.69692C7.8523 4.24683 7.59944 3.63638 7.59944 2.99986C7.59944 2.36334 7.8523 1.75289 8.30239 1.30281C8.75248 0.852718 9.36293 0.599861 9.99944 0.599861C10.636 0.599861 11.2464 0.852718 11.6965 1.30281C12.1466 1.75289 12.3994 2.36334 12.3994 2.99986ZM17.1994 5.39986C17.836 5.39986 18.4464 5.147 18.8965 4.69692C19.3466 4.24683 19.5994 3.63638 19.5994 2.99986C19.5994 2.36334 19.3466 1.75289 18.8965 1.30281C18.4464 0.852718 17.836 0.599861 17.1994 0.599861C16.5629 0.599861 15.9525 0.852718 15.5024 1.30281C15.0523 1.75289 14.7994 2.36334 14.7994 2.99986C14.7994 3.63638 15.0523 4.24683 15.5024 4.69692C15.9525 5.147 16.5629 5.39986 17.1994 5.39986Z"
                    fill="#9796A8"
                  />
                </svg>
              </button>
              <div className="dropdown-edit">
                <a href="/" className="col-s-12">
                  <p>Edit</p>
                </a>
                <a href="/" className="col-s-12">
                  <p className="color-delete">Delete</p>
                </a>
              </div>
            </div>
          </label>
        </div>
        <div className="col-s-9 box-checklist box-checklist-input">
          <div className="col-s-10">
            <input
              className="todofield"
              type="text"
              name="todo"
              placeholder="Add your todo..."
              value="Call Marie at 10.00 PM"
            />
          </div>
          <div className="col-s-2">
            <button className="save-btn">Save</button>
          </div>
        </div>
        <div className="col-s-9 box-checklist box-checklist-input">
          <input
            className="col-s-11 todofield"
            type="text"
            name="todo"
            placeholder="Add your todo..."
          />
        </div> */}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
