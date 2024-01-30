import React, { useEffect, useState } from 'react'
import './list.css'
import Form from './Form';

function List({todos}) {

    const [list, setList] = useState([]);
    const newList = (todo, i) => {
        setList(prev => ([...prev, {text: todo, key:i}])) 
    }

   
  return (
    <div>
        <ul>
            {
                todos.map((todo, i) => (
                    <li key={i}>
                        <span>{todo.todo}</span>
                    </li>
                ))
            }
        </ul>

        <p>{list.length} items left</p>
    

    </div>
  )
}

export default List