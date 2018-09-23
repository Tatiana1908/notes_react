import React from 'react';
import './style.css'; 
import ToDoItem from '../to-do-item'

function Todos(props){
  
  const listContent = Boolean(props.todos.length)
  const {searchText, fieldForSearch} = props.filter;
  let filteredTodos = [];
  if (listContent){
    filteredTodos = props.todos.filter(todoItem => {
      if(fieldForSearch && todoItem[fieldForSearch].indexOf(searchText) !== -1) return true;
      if(!fieldForSearch && (todoItem.title.indexOf(searchText) !== -1 || todoItem.content.indexOf(searchText) !== -1)) return true;
      return false;
    })
  }

  return (
    <div className="to-do-wrap d-flex">
      {filteredTodos.length && filteredTodos.map(toDoItem => 
          <ToDoItem itemInfo={toDoItem} key={toDoItem.id} id={toDoItem.id} removeItem={props.removeItem}/>
      )}
      {!listContent && <p>Your list is empty</p>}
    </div>
  );
  
}

export default Todos;