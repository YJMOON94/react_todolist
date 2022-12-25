import React, {useState, useEffect} from 'react';
import TodoShow from './TodoShow';
import '../scss/template.scss';

const Template = ()=>{

    const [todos, setTodos] = useState('');
    const [todoItem, setItems] = useState([]);

    const onChange = (event)=>{
        setTodos(event.target.value)
    }
    const keyPress = (event) =>{
        if(event.key === 'Enter') addItem();
    }
    
    const addItem = ()=>{
        setItems([...todoItem,{
            id : todoItem.length + 1,
            text : todos
        }]);
        setTodos('');
    }

    const todo_toggle = (event,id)=>{
        console.log(event,id);
    }

    const todo_delete = (index)=>{
        setItems( todoItem =>{todoItem.filter( todo => todo.id !== index )});
    }

    const todo_modify = ()=>{

    }

    return(
        <div className="todo_list">
            <h1>Todo List</h1>
            <div className="TodoInput">
                <input type="text" onChange={onChange} value={todos} placeholder="React 공부하기" onKeyUp={keyPress}></input>
                <button type="button" onClick={addItem}>추가</button>
            </div>
            <TodoShow todo_delete={todo_delete} todo_toggle={todo_toggle} todoItem={todoItem} 
            length={todoItem.length}
            />
        </div>
    )
};

export default Template;