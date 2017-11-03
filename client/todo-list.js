import React from 'react'
const renderTodoItem = ({ task, dueDate }, index) =>
  <li key={ index }>
    <h5>Task: { task }</h5>
    <h5>Due: { dueDate }</h5>
  </li>

export default function TodoList({ todos }) {
  return (
    <ul>
      { todos.map(renderTodoItem) }
    </ul>
  )
}
