import React, { useState } from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'uuid/v4'

function TodoApp() {
    const initialTodos = [
        { id: 1, title: "Clean the house", completed: false },
        { id: 2, title: "Be rich", completed: false },
        { id: 3, title: "Be yourself", completed: true }
    ]
    const [todos, setTodos] = useState(initialTodos)

    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid(), title: newTodoText, completed: true }])
    }

    const deleteTodo = todoId => {
        let filteredTodos = todos.filter(t => t.id !== todoId);
        setTodos(filteredTodos)
    }

    const editTodo = todoId => {

    }

    const toggleCompleted = todoId => {
        let mappedTodos = todos.map(todo => (
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        ))
        setTodos(mappedTodos)
    }

    return (
        <div>
            <h1>Todos with Hooks!</h1>
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />
            <TodoForm addTodo={addTodo} />
        </div>
    )
}

export default TodoApp
