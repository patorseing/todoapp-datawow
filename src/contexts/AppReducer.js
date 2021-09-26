import { CHANGE_MENU, LOADING, LOAD_DATA } from "./AppState";

const menuConditions = (menu, todo) =>
  ({
    All: true,
    Done: !!todo.completed,
    Undone: !todo.completed,
  }[menu]);

export const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case LOAD_DATA:
      // You can await here
      const todoList = action.payload
      return {
        ...state,
        loading: false,
        total: todoList.length,
        completed: todoList.filter((todo) => todo.completed).length,
        todoList: todoList.filter((todo) => menuConditions(state.menu, todo)),
      };
    case CHANGE_MENU:
      return { ...state, menu: action.payload };
    default:
      throw new Error();
  }
};
