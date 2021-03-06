import { INCREMENT, DECREMENT } from "../actions";

const initalState = { value: 0 };

export default (state = initalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
