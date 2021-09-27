import "./App.scss";
import { useReducer, useEffect } from "react";
import { AppContext, initialState } from "./contexts/AppContext";
import { reducer } from "./contexts/AppReducer";
import { fetchData } from "./services/fetchData";

import { Progress } from "./components/progressPanel";
import { TaskHeader } from "./components/taskHeader";
import { ToDoItem } from "./components/toDoItem";
import { AddTodoField } from "./components/addTodo";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // adjust args to your needs
    fetchData(dispatch);
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="col-6 col-m-8 col-s-10 box">
          <Progress />
          <TaskHeader />

          {state.todoList.map((task, i) => (
            <ToDoItem task={task} key={i} />
          ))}
          <AddTodoField />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
