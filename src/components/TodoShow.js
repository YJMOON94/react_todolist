import React from 'react';
import TodoItem from './TodoItem';
import '../scss/todoshow.scss';
const TodoShow = (props)=>{

    console.log();

    return(
    <div className="todo_items">
        <h2>오늘의 해야 할 일은?</h2>
        <p>오늘의 할일은 
            <span className="todo_length">{props.length}</span>
             개 입니다.</p>
        <ul>
            {props.todoItem.map(item => <TodoItem todo_delete={props.todo_delete} todo_toggle={props.todo_toggle} index={item.id} item={item.text} key={item.id}/>)}
        </ul>
    </div>

    )
}

export default TodoShow;