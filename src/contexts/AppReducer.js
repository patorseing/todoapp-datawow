import { CHANGE_MENU, LOADING, LOAD_DATA, ADD_DATA } from "./AppState";

export const reducer = (state, action) => {
  const menuConditions = {
    All: (todoList) => todoList,
    Done: (todoList) => todoList.filter((todo) => todo.completed),
    Undone: (todoList) => todoList.filter((todo) => !todo.completed),
  };
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case LOAD_DATA:
      // You can await here
      const totalToDoList = action.payload;
      return {
        ...state,
        loading: false,
        total: totalToDoList.length,
        totalToDoList,
        completed: totalToDoList.filter((todo) => todo.completed).length,
        todoList: menuConditions[state.menu](totalToDoList),
      };
    case CHANGE_MENU:
      return {
        ...state,
        menu: action.payload,
        todoList: menuConditions[action.payload](state.totalToDoList),
      };
    case ADD_DATA:
      state.todoList.push(action.payload);
      return state;
    default:
      throw new Error();
  }
};
