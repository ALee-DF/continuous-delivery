import React, { Component } from 'react'
import TodoForm from './todo-form.js'
import TodoList from './todo-list.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = {
      task: formData.get('taskInput'),
      dueDate: formData.get('dueDateInput')
    }
    event.target.reset()
    await fetch('/api/todos/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    })

    this.setState({
      todos: this.state.todos.concat(data)
    })
  }

  render() {
    return (
      <div className='container'>
        <TodoForm handleSubmit={ this.handleSubmit }/>
        <TodoList todos={ this.state.todos }/>
      </div>
    )
  }
}
