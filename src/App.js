import "./styles/App.scss";
import { useReducer, useEffect } from "react";
import { AppContext, initialState } from "./contexts/AppContext";
import { reducer } from "./contexts/AppReducer";
import { readData } from "./services/crudData";

import { Progress } from "./components/progressPanel";
import { TaskHeader } from "./components/TaskHeader";
import { TodoPanel } from "./components/toDoPanel";
import { AddTodoField } from "./components/addTodo";

import registerFaIcons from './res/registerFaIcons';

registerFaIcons();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // adjust args to your needs
    readData(dispatch);
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="root-container">
          <div className="box">
            <div className="root-container">
              <Progress />
              <TaskHeader />
            </div>
            <TodoPanel />
            <AddTodoField />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
