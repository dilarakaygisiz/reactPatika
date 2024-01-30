import React, { useEffect, useState } from 'react'

const initialFormValues = {todo: ''}

function Form({addTodo, todos}) {
    const [form,  setForm] = useState(initialFormValues);

    useEffect(() => {

    }, [todos])

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
    const onSubmit = (e) => {
        e.preventDefault()

        if (form.todo === '') {
            return false;
        }

        addTodo([...todos, form])
        setForm(initialFormValues);
    }
    
    
  return (
    <form onSubmit={onSubmit}>
        <div>
            <input 
            placeholder="What needs to be done?"
            value={form.todo}
            onChange={onChangeInput} />
        </div>
        <div>
            <button onClick={onSubmit}>Add new to-do</button>
        </div>
    </form>
    
  )
}

export default Form