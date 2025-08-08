import React, { useState, useEffect } from 'react'

function TodoApp() {
    const [task, setTask] = useState('')
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleAdd = (e) => {
        e.preventDefault()
        if (task.trim() === '') return
        setTodos([...todos, { text: task, done: false }])
        setTask('')
    }

    const toggleDone = (index) => {
        const updated = [...todos]
        updated[index].done = !updated[index].done
        setTodos(updated)
    }

    const deleteTodo = (index) => {
        const updated = [...todos]
        updated.splice(index, 1)
        setTodos(updated)
    }

    return (
        <>
            <form onSubmit={handleAdd}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task..."
                />
                <button type="submit">Add</button>
            </form>

            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className={todo.done ? 'done' : ''}
                        onClick={() => toggleDone(index)}
                    >
                        {todo.text}
                        <button className="delete-btn" onClick={(e) => {
                            e.stopPropagation()
                            deleteTodo(index)
                        }}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoApp
