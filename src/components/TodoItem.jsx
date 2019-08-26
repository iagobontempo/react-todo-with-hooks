import React from 'react'
import useToggle from './hooks/useToggle'
import useInputState from './hooks/useInputState'

function TodoItem(props) {
    const [isEditing, toggleIsEditing] = useToggle()
    const [value, handleChange, reset] = useInputState(props.title)

    const handleSubmit = e => {
        e.preventDefault()
        props.edit(props.id, value)
        toggleIsEditing()
    }

    return (
        <div>
            <div style={{ textDecoration: props.completed ? "line-through" : "none" }}>

                {isEditing ?
                    <form onSubmit={handleSubmit}>
                        <input value={value} onChange={handleChange} />
                    </form>
                    :
                    props.title}

            </div>
            <div>
                {props.completed ? <span onClick={() => props.toggle(props.id)}>✔️</span> : <span onClick={() => props.toggle(props.id)}>❌</span>}
                <button onClick={() => props.delete(props.id)}>💣</button>
                <button onClick={() => toggleIsEditing()}>✏️</button>
            </div>
        </div>
    )
}

export default TodoItem
