import React from 'react';
import './style.css'; 

function ToDoItem (props) {
  const {title, content, bgColor, id} = props.itemInfo;
  return (  
      <div className={`to-do-item ${bgColor}`}>
          <span className="removeBtn" onClick={() => props.removeItem(id)}>+</span>
          <h3>{title}</h3>
          <p>{content}</p>
      </div>
  );
}

export default ToDoItem;