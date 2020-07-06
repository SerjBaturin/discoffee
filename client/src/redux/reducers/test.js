const test = (state = 0, action) => {
  switch (action.type) {
    case "TEST_ASYNC":
      return action.value;
    default:
      return state;
  }
};

export default test;
