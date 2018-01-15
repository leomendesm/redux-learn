'use strict'

import React from 'react'

import { connect } from 'react-redux'

import { addTodo, toggleTodo } from 'reducers/todos/action-creators'

const App = ({ todos, handleAddTodo, handleToggleTodo }) => (
  <div>
    <form onSubmit={handleAddTodo}>
      <input name='todo' type='text' />
      <button type='submit'>Add</button>
    </form>
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onClick={handleToggleTodo(todo.id)}
        >{todo.text}</li>
      ))}
    </ul>
    <div>
      <span>All</span> | <a href=''>Done</a> | <a href=''>To-do</a>
    </div>
  </div>
)

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  handleAddTodo: e => {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value))
    e.target.todo.value = ''
  },
  handleToggleTodo: id => e => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
