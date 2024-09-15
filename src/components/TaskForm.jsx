import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../features/taskSlice';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Medium');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({ id: uuidv4(), title, description, priority }));
        setTitle('');
        setDescription('');

    }

    return (
        <form onSubmit={handleSubmit} className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg rounded-lg p-6 mb-6'>
            <h2 className='text-2xl font-bold text-white mb-4 text-center'>Add New Task</h2>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Task Title' className='border border-purple-300 p-3 w-full mb-4 rounded focus:ring-2 focus:ring-purple-600 text-gray-800' required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Task Description' className='border border-pink-300 p-3 w-full mb-4 rounded focus:ring-2 focus:ring-pink-600 text-gray-800' required />
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className='border border-red-300 p-3 w-full mb-4 rounded focus:ring-2 focus:ring-red-600 text-gray-800' >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button type="submit" className='bg-blue-500 text-white w-full py-3 rounded hover:bg-blue-600 transition-colors duration-300'>Add task</button>
        </form>
    )
}

export default TaskForm
