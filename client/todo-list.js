import React from 'react'
const renderTodoItem = ({ task, dueDate }, index) =>
  <li key={ index }>
    <h1>Task: { task }</h1>
    <h2>Due: { dueDate }</h2>
  </li>

export default function TodoList({ todos }) {
  return (
    <ul>
      { todos.map(renderTodoItem) }
    </ul>
  )
}
