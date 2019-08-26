import React from 'react'
import useInputState from './hooks/useInputState'

function TodoForm(props) {
    const [value, handleChange, reset] = useInputState("")

    const handleSubmit = e => {
        e.preventDefault()
        props.addTodo(value)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="todo" type="text" value={value} onChange={handleChange} placeholder="Add todo" />
                <button>ADD</button>
            </form>
        </div>
    )
}

export default TodoForm
