import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const inintialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true 
  }
};

const todosReducer = (oldState = inintialState, action) => {
  Object.freeze(oldState); 
  const newState = {};

  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      return Object.assign({}, oldState, { [action.todo.id]: action.todo });
    default:
      return oldState;
  }
};


export default todosReducer; 


