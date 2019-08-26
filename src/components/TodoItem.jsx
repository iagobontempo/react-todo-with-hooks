import React from 'react'

function TodoItem(props) {
    return (
        <div>
            {props.id} - {props.title} - {props.completed}
        </div>
    )
}

export default TodoItem
