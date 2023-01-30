import { useState, useContext, useMemo, useCallback } from 'react';
import { TodoContext, DispatchContext } from './TodoProvider';
import MyTodo from './MyTodo';

function Todo() {
  const [task, setTask] = useState('')
  const {state, dispatch} = useContext(TodoContext)
  // const dispatch = useContext(DispatchContext)
  // console.log(state)

  const onTodoAdded = (e) => {
    e.preventDefault()
    dispatch({
      type: "ADDED", task: task
    });
    setTask('')
  };

  const onTodoComplete = useCallback((task) => {
      dispatch({
          type: "TOGGLED", task: task
      });
    }, [dispatch]);

  return (
    <>
      <form onSubmit={onTodoAdded}>
        <input type="text" value={task} onChange={(e)=> setTask(e.target.value)}/>
        <button>Submit</button>
      </form>
      <ul>
      {state && state.map((todo, i) => (
          <MyTodo
            completed={todo.completed}
            task={todo.task}
            onTodoComplete={onTodoComplete}
            key={i}
          />
        ))}
      </ul>
    </>
  );
}

export default Todo;