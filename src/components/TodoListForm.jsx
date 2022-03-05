import { nanoid } from 'nanoid'
import { useTodoList } from '@/context/TodoContext'

export default function TodoListForm() {
  const { addTodo } = useTodoList()

  const handleSubmit = (e) => {
    e.preventDefault()
    const input = e.target.querySelector('input')
    const todo = {
      id: nanoid(),
      text: input.value,
      completed: false
    }
    input.value = ''
    addTodo(todo)
  }

  return (
    <form
      className="block w-full mb-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 border-teal-500 leading-tight focus:outline-teal-400 focus:shadow-outline"
        placeholder="Qué quieres recordar?..."
      />
    </form>
  )
}
