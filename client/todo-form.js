import React from 'react'
export default function TodoForm({ handleSubmit }) {
  return (
    <form id="signUpForm" onSubmit={ handleSubmit }>
      <div className="form-group">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          className="form-control"
          id="taskInput"
          name="taskInput"
          aria-describedby="emailHelp"
          placeholder="Enter task" />
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Date</label>
        <input
          type="text"
          className="form-control"
          id="dueDateInput"
          name="dueDateInput"
          placeholder="mm/dd/yyyy" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
