import React, {useState} from 'react';
import TodoShow from './TodoShow';
import '../scss/template.scss';

const Template = ()=>{

    const [todos, setTodos] = useState('');
    const [todoItem, setItems] = useState([]);

    const onChange = (event)=>{
        setTodos(event.target.value)
    }

    const addItem = ()=>{
        setItems([...todoItem,todos]);
    }

    const todo_toggle = (id)=>{
        console.log(id);
    }

    const todo_delete = ()=>{
        
    }

    const todo_modify = ()=>{

    }

    return(
        <div className="todo_list">
            <h1>Todo List</h1>
            <div className="TodoInput">
                <input type="text" onChange={onChange} value={todos}></input>
                <button type="button" onClick={addItem}>추가</button>
            </div>
            <TodoShow todo_toggle={todo_toggle} todoItem={todoItem} length={todoItem.length}/>
        </div>
    )
};

export default Template;