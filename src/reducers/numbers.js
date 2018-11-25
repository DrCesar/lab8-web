const numbers = (state = { number: '' }, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return {
        ...state,
        number: state.number + action.number,
      };
    default:
      return state;
  }
};

export default numbers;
