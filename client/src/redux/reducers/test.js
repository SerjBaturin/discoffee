function test(state = "test", action) {
  switch (action.type) {
    case "TEST":
      return (state = "FROM CLEAN REDUX");
    default:
      return state;
  }
}

export default test;
