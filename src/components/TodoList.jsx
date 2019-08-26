import React from 'react'
import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <div>
            {props.todos.map(t => (
                <TodoItem key={t.id} id={t.id} title={t.title} completed={t.completed} />
            ))}
        </div>
    )
}

export default TodoList
