'use strict'

import React from 'react'

import { connect } from 'react-redux'

import { addTodo } from 'reducers/todos/action-creators'

const App = ({ todos, handleAddTodo }) => (
  <div>
    <form onSubmit={handleAddTodo}>
      <input name='todo' type='text' />
      <button type='submit'>Add</button>
    </form>
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</li>
      ))}
    </ul>
    <div>
      <span>All</span> | <a href=''>Done</a> | <a href=''>To-do</a> 
    </div>
  </div>
)

const mapStateToProps = state => ({
  todos: state
})

const mapDispatchToProps = dispatch => ({
  handleAddTodo: e => {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
