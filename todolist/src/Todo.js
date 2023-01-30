import { useState, useContext } from 'react';
import { TodoContext, DispatchContext } from './TodoProvider';
import MyTodo from './MyTodo';

function Todo() {
  const [task, setTask] = useState('')
  const {state, dispatch} = useContext(TodoContext)
  // const dispatch = useContext(DispatchContext)
  // console.log(state)
  console.log("form rerendered")

  const onTodoAdded = (e) => {
    e.preventDefault()
    dispatch({
      type: "ADD", task: task
    });
    setTask('')
  };

  const onTodoComplete = (task) => {
    dispatch({
      type: "COMPLETED", task: task
    });
  };
  
  return (
    <>
      <form onSubmit={onTodoAdded}>
        <input type="text" value={task} onChange={(e)=> setTask(e.target.value)}/>
        <button>Submit</button>
      </form>
      <ul>
      {state && state.map((todo, i) => (
          <MyTodo
            {...todo}
            onTodoAdded={onTodoAdded}
            onTodoComplete={onTodoComplete}
            key={i}
          />
        ))}
      </ul>
    </>
  );
}

export default Todo;