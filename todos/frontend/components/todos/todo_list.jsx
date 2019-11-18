import React from 'react';
import TodoListItem from './todo_list_item';


const TodoList = ({todos}) => {
  const listItems = Object.keys(todos).map((id, i) => (
    <TodoListItem 
      key={i}
      todo={todos[id]}
    />
  ));

  return (
    <ul>
      { listItems }
    </ul>
  )
};


export default TodoList; 