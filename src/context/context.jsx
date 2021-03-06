import { createContext, useReducer } from 'react';
import { reducer } from './reducer';
import { generationId } from '../services/config';
const ToDoAppContext = createContext();
const intialState = {
  tasks: [],
  archiveTasks: [],
  // isEditTask: false,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, intialState);

  value.setAllTasks = (tasks) => {
    dispatch({ type: 'SET_TASKS', payload: tasks });
  };

  value.addTask = (title) => {
    let newTask = { id: generationId(), title, addDate: Date.now() };
    dispatch({ type: 'ADD_TASK', payload: newTask });
  };

  value.editTask = (id, title) => {
    dispatch({ type: 'EDIT_TASK', payload: { id, title } });
  };

  value.removeTask = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: { id } });
  };

  value.sendToArchive = (id) => {
    dispatch({ type: 'SEND_ARCHIVE', payload: { id } });
  };

  value.setArchiveTasks = (tasks) => {
    dispatch({ type: 'SET_ARCHIVE_TASKS', payload: tasks });
  };

  value.removeArchive = () => {
    dispatch({ type: 'REMOVE_ARCHIVE' });
  };

  return (
    <ToDoAppContext.Provider value={value}>{children}</ToDoAppContext.Provider>
  );
};

export { ToDoAppContext };
