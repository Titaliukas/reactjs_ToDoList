import React from 'react'

export default function ToDoCard(props) {
    const {children, handleEditTodo, handleDeleteTodo, index} = props
    return (
        <li>
            {children}
            <button onClick={() => {
                handleEditTodo(index)
            }}>
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => {
                handleDeleteTodo(index)
            }}>
                <i class="fa-solid fa-trash"></i>
            </button>
        </li>
    )
}
