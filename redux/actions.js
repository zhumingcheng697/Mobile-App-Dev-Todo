const addTodo = (dispatch) => (todo) => {
  dispatch({ type: "addTodo", payload: { todo } });
};

const editTodo = (dispatch) => (id, newTodo) => {
  dispatch({ type: "editTodo", payload: { id, newTodo } });
};

const removeTodo = (dispatch) => (id) => {
  dispatch({ type: "removeTodo", payload: { id } });
};

const clearTodos = (dispatch) => () => {
  dispatch({ type: "clearTodos" });
};

const setDefaultPriority = (dispatch) => (value) => {
  dispatch({ type: "setDefaultPriority", payload: value });
};
const setRememberPriority = (dispatch) => (value) => {
  dispatch({ type: "setRememberPriority", payload: value });
};
const setRequireBody = (dispatch) => (value) => {
  dispatch({ type: "setRequireBody", payload: value });
};

export {
  addTodo,
  editTodo,
  removeTodo,
  clearTodos,
  setDefaultPriority,
  setRememberPriority,
  setRequireBody,
};
