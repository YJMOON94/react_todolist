import React from 'react';

const TodoItem = (props)=>{


    return(
        <li className={'list_'+ (props.index)}>
            <input
                type="checkbox"
                id={'cd'+props.index}
                onClick={(event)=>{
                    props.todo_toggle(event,props.index);
                }}>

            </input>
            <label htmlFor={'cd'+props.index}><i className="fa-solid fa-check"></i></label>
            <span>
                {props.item}
            </span>
        </li>
    )
}

export default TodoItem;