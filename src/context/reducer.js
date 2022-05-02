export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [payload, ...state.tasks],
      };
    default:
      return state;
  }
};
