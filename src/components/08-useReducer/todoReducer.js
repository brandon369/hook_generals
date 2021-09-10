export const todoReducer = (state = [], action) => {
  console.log('hola')
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    // case 'decrement':
    //   return {count: state.count - 1};
    default:
      return state
  }

}
