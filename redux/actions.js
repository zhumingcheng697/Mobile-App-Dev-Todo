function addTodo(dispatch, todo) {
  dispatch({ type: "addTodo", payload: { todo } });
}

function editTodo(dispatch, id, newTodo) {
  dispatch({ type: "editTodo", payload: { id, newTodo } });
}

function removeTodo(dispatch, id) {
  dispatch({ type: "removeTodo", payload: { id } });
}

function clearTodos(dispatch) {
  dispatch({ type: "clearTodos" });
}

function setDefaultPriority(dispatch, value) {
  dispatch({ type: "setDefaultPriority", payload: value });
}
function setRememberPriority(dispatch, value) {
  dispatch({ type: "setRememberPriority", payload: value });
}
function setRequireBody(dispatch, value) {
  dispatch({ type: "setRequireBody", payload: value });
}

export {
  addTodo,
  editTodo,
  removeTodo,
  clearTodos,
  setDefaultPriority,
  setRememberPriority,
  setRequireBody,
};
