import React from 'react'
import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <div>
            {props.todos.map(t => (
                <TodoItem key={t.id}
                    id={t.id}
                    title={t.title}
                    completed={t.completed}
                    delete={props.deleteTodo}
                    toggle={props.toggleCompleted}
                    edit={props.editTodo} />
            ))}
        </div>
    )
}

export default TodoList
