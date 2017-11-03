import React from 'react'

const listEntryStyle = {
  'box-shadow': '0 3px 5px black',
  'background-color': 'rgb(225, 225, 200)',
  'border-radius': '15px',
  'padding': '5px',
  'margin': '8px'
}
const renderTodoItem = ({ task, dueDate }, index) =>
  <li style={ listEntryStyle } key={ index }>
    <h5>Task: { task }</h5>
    <h5>Due: { dueDate }</h5>
  </li>

const listStyle = {
  'listStyle': 'none',
  'padding': 2
}
export default function TodoList({ todos }) {
  return (
    <ul style={ listStyle }>
      { todos.map(renderTodoItem) }
    </ul>
  )
}
