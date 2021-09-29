import {
  CHANGE_MENU,
  LOADING,
  LOAD_DATA,
  ADD_DATA,
  UPDATE_DATA,
  REMOVE_DATA,
} from "./AppState";

const menuConditions = {
  All: (todoList) => todoList,
  Done: (todoList) => todoList.filter((todo) => todo.completed),
  Undone: (todoList) => todoList.filter((todo) => !todo.completed),
};

const forUpdateAndDelete = (state, tempList) => ({
  ...state,
  total: tempList.length,
  completed: menuConditions["Done"](tempList).length,
  todoList: menuConditions[state.menu](tempList),
});

export const reducer = (state, action) => {
  let tempList = [];
  let objIndex = 0;

  const findI = (l, id) => tempList.findIndex((obj) => obj.id === id);
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
        completed: menuConditions["Done"](totalToDoList).length,
        todoList: menuConditions[state.menu](totalToDoList),
      };
    case CHANGE_MENU:
      return {
        ...state,
        menu: action.payload,
        todoList: menuConditions[action.payload](state.totalToDoList),
      };
    case ADD_DATA:
      tempList = state.totalToDoList;
      tempList.push(action.payload);
      return {
        ...state,
        total: tempList.length,
        totalToDoList: tempList,
        todoList: menuConditions[state.menu](tempList),
      };
    case UPDATE_DATA:
      tempList = state.totalToDoList;
      const todo = action.payload;
      objIndex = findI(tempList, todo.id);
      tempList[objIndex] = todo;
      return forUpdateAndDelete(state, tempList);
    case REMOVE_DATA:
      tempList = state.totalToDoList;
      const id = action.payload;
      objIndex = findI(tempList, id);
      if (objIndex !== -1) tempList.splice(objIndex, 1);
      return forUpdateAndDelete(state, tempList);
    default:
      throw new Error();
  }
};
