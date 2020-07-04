function test(state = 'test', action) {
  switch (action.type) {
    case 'TEST_ASYNC':
      return action.value
    default:
      return state
  }
}

export default test
