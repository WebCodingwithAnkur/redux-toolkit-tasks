import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../features/taskSlice';

const TaskList = () => {


  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();


  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.priority === filter;
  });

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  }


  return (

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {filteredTasks.map((task) => (
        <div key={task.id} className='bg-gradient-to-br from-green-300 via-yellow-300 to-orange-300 p-4 rounded-lg shadow-lg transform hover:scale-105'>
          <h3 className='text-xl font-bold mb-2 text-gray-800'>{task.title}</h3>
          <p className='text-gray-700 mb-4'>{task.description}</p>
          <p className={`text-sm font-semibold mb-4 
          ${task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>
            Priority:{task.priority}</p>
          <button onClick={() => handleDelete(task.id)} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300'>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default TaskList
