import React, { Component } from 'react'
import TodoForm from './todo-form.js'
import TodoList from './todo-list.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    const res = await fetch('/api/todos')
    const todos = await res.json()
    this.setState({ todos })
  }

  handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = {
      task: formData.get('taskInput'),
      dueDate: formData.get('dueDateInput')
    }

    fetch('/api/todos/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    })
    event.target.reset()
  }

  render() {
    return (
      <div className="container">
        <TodoForm handleSubmit={ this.handleSubmit }/>
        <TodoList todos={ this.state.todos }/>
      </div>
    )
  }
}
