import { TodoListProvider } from '@/context/TodoContext'
import TodoListForm from '@components/TodoListForm'
import TodoList from '@components/TodoList'

function App() {
  return (
    <TodoListProvider>
      <div className="min-h-screen min-w-full">
        <div className="max-w-2xl mx-auto py-8 md:px-0 px-4">
          <TodoListForm />
          <TodoList />
        </div>
      </div>
    </TodoListProvider>
  )
}

export default App
