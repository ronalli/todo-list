export const reducer = (state, { type, payload }) => {
  switch (type) {
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
    default:
      return state;
  }
};
