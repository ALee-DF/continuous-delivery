import React, { Component } from 'react'
export default class TodoForm extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            className="form-control"
            id="taskInput"
            aria-describedby="emailHelp"
            placeholder="Enter task" />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Date</label>
          <input
            type="tesxt"
            className="form-control"
            id="dueDateInput"
            placeholder="Enter Due Date" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}
