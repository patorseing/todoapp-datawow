import {
  menuConditions,
  CHANGE_MENU,
  LOADING,
  LOAD_DATA,
  ADD_DATA
} from "./AppState";

export const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case LOAD_DATA:
      // You can await here
      const todoList = action.payload;
      return {
        ...state,
        loading: false,
        total: todoList.length,
        completed: todoList.filter((todo) => todo.completed).length,
        todoList: todoList.filter((todo) => menuConditions(state.menu, todo)),
      };
    case CHANGE_MENU:
      return { ...state, menu: action.payload };
    case ADD_DATA:
      state.todoList.push(action.payload);
      return state;
    default:
      throw new Error();
  }
};
