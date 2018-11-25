
const addNumber = number => ({
  type: 'ADD_NUMBER',
  number,
});

const addOperand = operand => ({
  type: 'ADD_OPERAND',
  operand,
});

export default {
  addNumber,
  addOperand,
};
