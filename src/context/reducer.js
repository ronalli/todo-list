export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_TASKS':
      return {
        ...state,
        tasks: payload || [],
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [payload, ...state.tasks],
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== payload.id),
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          return {
            ...task,
            title: task.id === payload.id ? payload.title : task.title,
          };
        }),
      };
    case 'SEND_ARCHIVE':
      return {
        ...state,
        archiveTasks: [
          ...state.archiveTasks,
          state.tasks.filter((task) => task.id === payload.id),
        ],
        tasks: state.tasks.filter((task) => task.id !== payload.id),
      };
    default:
      return state;
  }
};
