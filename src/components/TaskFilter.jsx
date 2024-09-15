import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../features/taskSlice';

const TaskFilter = () => {
  const filter = useSelector((state) => state.tasks.filter);
  const dispatach = useDispatch();
 
  const handleFilter = (e) => {
    console.log(e.target.value);
    dispatach(setFilter(e.target.value));
  }

  return (
    <div className='mb-4'>
       <select value={filter} onChange={handleFilter}  className='border p-2 rounded'>
        <option value="all">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
       </select>
    </div>
  )
}

export default TaskFilter
