import { useTodoList } from '@/context/TodoContext'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { todos } = useTodoList()

  const todosCount = todos.length

  const todosPendingCount = todos.filter((todo) => !todo.completed).length

  return (
    <div>
      <h2 className="text-2xl mb-4 font-bold text-teal-900">
        Mis tareas <span className="font-normal text-xl opacity-50">({todosPendingCount} pendientes)</span>
      </h2>
      {todosCount > 0 ? (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <div className="px-6 py-4 bg-teal-50 rounded shadow-md">
          No tienes tareas registradas
        </div>
      )}
    </div>
  )
}
