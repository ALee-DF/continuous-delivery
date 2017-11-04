import React from 'react'
const renderTodoItem = ({ task, dueDate }, index) =>
  <li
    className='card'
    style={{
      'padding': '5px',
      'marginBottom': '10px'
    }}
    key={ index }>
    <h5 className='card-title'>Task: { task }</h5>
    <h5 className='card-text'>Due: { dueDate }</h5>
  </li>

export default function TodoList({ todos }) {
  return (
    <ul
      style={{
        'listStyle': 'none',
        'padding': '0',
        'marginTop': '10px'
      }}>
      { todos.map(renderTodoItem) }
    </ul>
  )
}
