import TaskFilter from "./components/TaskFilter"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"


function App() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Task Management App
      </h1>
      <TaskForm />
      <TaskFilter />
      <TaskList />
    </div>
  )
}

export default App
