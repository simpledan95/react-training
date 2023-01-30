import React from 'react'

function MyTodo({task, completed, onTodoComplete}) {
  const styling = {
    color: completed ? "green" : "black"
  }
  // const handleClick = () => {
  //   console.log(task)
  //   onTodoComplete(task)
  // }
  return (
    <li>
      <h2 style={styling}>
        {task}
        <button onClick={() => onTodoComplete(task)} style={{marginLeft: "10px"}}>Completed</button>
      </h2>
    </li>
  )
}

export default MyTodo