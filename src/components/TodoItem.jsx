/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useTodoList } from '@/context/TodoContext'

export default function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodoList()

  const handleToggle = () => {
    toggleTodo(todo.id)
  }

  const handleRemove = () => {
    removeTodo(todo.id)
  }

  return (
    <li className="text-lg flex justify-between">
      <span>
        <span>❕</span>
        <span
          className={clsx(todo.completed && 'line-through opacity-25', 'hover:opacity-50 transition cursor-pointer mr-2')}
          onClick={handleToggle}
        >
          {todo.text}
        </span>
      </span>
      <button className="text-sm" type="button" onClick={handleRemove}>❌</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired
}
