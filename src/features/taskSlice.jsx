import { createSlice } from "@reduxjs/toolkit";


// helper function to fetch the local storage value 
const LoadFromLocalStorage = () => {
  const saveTasks = localStorage.getItem('tasks');
  return saveTasks ? JSON.parse(saveTasks) : [];
}

// helper function to set the value in local storage
const saveToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: LoadFromLocalStorage(),
    filter: 'all'
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveToLocalStorage(state.tasks);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveToLocalStorage(state.tasks);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }

});


export const { addTask, deleteTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;