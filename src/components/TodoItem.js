import React, {useState} from 'react';

const TodoItem = (props)=>{


    return(
        <li className={'list_'+ props.index}>
            <input
                type="checkbox"
                id="cb1"
                onClick={()=>{
                    props.todo_toggle(props.index);
                }}>

            </input>
            <label htmlFor="cb1"><i className="fa-solid fa-check"></i></label>
            <span>
                {props.item}
            </span>
            <button className="modify">수정</button>
            <button className="delete">삭제</button>
        </li>
    )
}

export default TodoItem;