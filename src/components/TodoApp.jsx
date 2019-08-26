import React, { useState, useEffect } from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'uuid/v4'

function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || [
        { id: 1, title: "Clean the house", completed: false },
        { id: 2, title: "Be rich", completed: false },
        { id: 3, title: "Be yourself", completed: true }
    ]

    const [todos, setTodos] = useState(initialTodos)

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = newTodoText => {
        if (newTodoText === '') {
            return alert('You must write something!')
        } else {
            setTodos([...todos, { id: uuid(), title: newTodoText, completed: false }])
        }
    }

    const deleteTodo = todoId => {
        let filteredTodos = todos.filter(t => t.id !== todoId);
        setTodos(filteredTodos)
    }

    const editTodo = (todoId, newTitle) => {
        let mappedTodos = todos.map(todo => (
            todo.id === todoId ? { ...todo, title: newTitle } : todo
        ))
        setTodos(mappedTodos)
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
            <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} toggleCompleted={toggleCompleted} />
            <TodoForm addTodo={addTodo} />
        </div>
    )
}

export default TodoApp
