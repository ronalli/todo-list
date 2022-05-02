import { createContext, useReducer } from 'react';
import { reducer } from './reducer';
import { generationId } from '../services/config';
const ToDoAppContext = createContext();
const intialState = {
  tasks: [],
  isUpdate: false,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, intialState);

  value.setTasks = (tasks) => {
    dispatch({ type: 'SET_TASKS', payload: tasks });
  };

  value.addTask = (title) => {
    let newTask = { id: generationId(), title, addDate: Date.now() };
    dispatch({ type: 'ADD_TASK', payload: newTask });
  };

  value.updateTask = (id) => {
    dispatch({ type: 'UPDATE_TASK', payload: { id } });
  };

  value.removeTask = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: { id } });
  };

  return (
    <ToDoAppContext.Provider value={value}>{children}</ToDoAppContext.Provider>
  );
};

export { ToDoAppContext };