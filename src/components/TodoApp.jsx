import React, { useState } from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
    const initialTodos = [
        { id: 1, title: "Clean the house", completed: false },
        { id: 2, title: "Be rich", completed: false },
        { id: 3, title: "Be yourself", completed: true }
    ]
    const [todos, setTodos] = useState(initialTodos)

    const addTodo = newTodoText => {
        setTodos([...todos, { id: 4, title: newTodoText, completed: true }])
    }

    return (
        <div>
            <h1>Todos with Hooks!</h1>
            <TodoList todos={todos} />
            <TodoForm addTodo={addTodo} />
        </div>
    )
}

export default TodoApp
