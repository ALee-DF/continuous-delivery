import React, { Component } from 'react'
export default class App extends Component {
  render() {
    return (
      <form id="signUpForm" onSubmit={ this.handleSubmit }>
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
            type="tesxt"
            className="form-control"
            id="dueDateInput"
            name="dueDateInput"
            placeholder="Enter Due Date" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}
