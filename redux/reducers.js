import { combineReducers } from "redux";

const todosReducer = (state = [], action) => {
  function indexOfTodo(id) {
    return state.findIndex((todo) => todo.id == id);
  }

  const actionMap = {
    addTodo() {
      return [action.payload.todo, ...state];
    },
    editTodo() {
      const index = indexOfTodo(action.payload.id);

      if (index < 0) return state;

      const newState = [...state];
      newState[index] = action.payload.newTodo;
      return newState;
    },
    removeTodo() {
      const index = indexOfTodo(action.payload.id);

      if (index < 0) return state;

      const newState = [...state];
      newState.splice(index, 1);
      return newState;
    },
    clearTodos() {
      return [];
    },
  };

  if (!(action.type in actionMap)) return state;

  return actionMap[action.type]();
};

const usernameReducer = (state = "", action) => {
  if (action.type === "updateUsername") {
    return action.payload;
  }

  return state;
};
const emailReducer = (state = "", action) => {
  if (action.type === "updateEmail") {
    return action.payload;
  }

  return state;
};
const numberReducer = (state = "", action) => {
  if (action.type === "updateNumber") {
    return action.payload;
  }

  return state;
};

const defaultPriorityReducer = (state = null, action) => {
  if (action.type === "setDefaultPriority") {
    return action.payload;
  }

  return state;
};
const rememberPriorityReducer = (state = false, action) => {
  if (action.type === "setRememberPriority") {
    return action.payload;
  }

  return state;
};
const requireBodyReducer = (state = false, action) => {
  if (action.type === "setRequireBody") {
    return action.payload;
  }

  return state;
};

export default combineReducers({
  todos: todosReducer,
  username: usernameReducer,
  email: emailReducer,
  number: numberReducer,
  defaultPriority: defaultPriorityReducer,
  rememberPriority: rememberPriorityReducer,
  requireBody: requireBodyReducer,
});
