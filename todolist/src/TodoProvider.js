import React, { createContext, useReducer } from 'react'
import TodoReducer from './TodoReducer';

export const TodoContext = createContext();
export const DispatchContext = createContext()

export function TodoProvider({children}) {
  const [state, dispatch] = useReducer(TodoReducer, [])
  return (
    <TodoContext.Provider value={{state, dispatch}}>
      {/* <DispatchContext.Provider value={dispatch}> */}
        {children}
      {/* </DispatchContext.Provider> */}
    </TodoContext.Provider>
  )
}
