import {
  createContext,
  useContext
} from 'react'
import PropTypes from 'prop-types'
import useTodosValues from '@/hooks/useTodosValues'

const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {}
})

export function TodoListProvider({ children }) {
  const contextValue = useTodosValues()

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  )
}

TodoListProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useTodoList = () => useContext(TodoContext)
