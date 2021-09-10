export const todoReducer = (state = [], action) => {
  console.log('hola')
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter(todo => todo.id !== action.payload);
    case 'complete-old':
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        } else {
          return todo;
        }
      });
    case 'complete':
      return state.map(todo =>
        (todo.id === action.payload)
          ? {...todo, done: !todo.done}
          : todo
      );
    default:
      return state
  }

}
