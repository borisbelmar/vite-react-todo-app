import {
  useState,
  useCallback,
  useMemo
} from 'react'

export default function useTodosValues() {
  const [todos, setTodos] = useState([])

  const addTodo = useCallback((todo) => {
    setTodos((prev) => [...prev, todo])
  }, [])

  const removeTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }, [])

  const toggleTodo = useCallback((id) => {
    setTodos((prev) => prev.map(
      (todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    ))
  }, [])

  return useMemo(() => ({
    todos,
    addTodo,
    removeTodo,
    toggleTodo
  }), [
    todos,
    addTodo,
    removeTodo,
    toggleTodo
  ])
}
