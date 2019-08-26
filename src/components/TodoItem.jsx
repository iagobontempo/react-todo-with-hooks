import React from 'react'

function TodoItem(props) {
    return (
        <div>
            <div style={{ textDecoration: props.completed ? "line-through" : "none" }}
                onClick={() => props.toggle(props.id)}
            >
                {props.title}
            </div>
            <div>
                {props.completed ? <span>✔️</span> : <span>❌</span>}
                <button onClick={() => props.delete(props.id)}>💣</button>
                <button>✏️</button>
            </div>
        </div>
    )
}

export default TodoItem
