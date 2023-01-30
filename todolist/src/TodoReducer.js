const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, {task: action.task, completed: false}]
    case "COMPLETED":
      return state.map(todo => todo.task === action.task ? {...todo, completed: !todo.completed} : todo)
    default:
      return state;
  }
}
export default TodoReducer