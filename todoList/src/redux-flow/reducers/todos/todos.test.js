import todos from './index'
import { ADD_TODO, TOGGLE_TODO } from './actions'

import { initialState } from './index'

import deepFreeze from 'deep-freeze'
import { expect } from 'chai'

describe('Todos reducer', () => {

  describe('Smoke Test', () => {
    it('should todos be a function', () => {
        expect(todos).to.be.a('function')
    })
  })
  describe('Initial State', () => {
    it('should return initial state when state is undefined', () => {
      const before = undefined
      const action = deepFreeze({ 
        type: ''})
      const after = initialState
      expect(todos(before, action)).to.be.deep.equal(after)
    })

    it('should return state when action is undefined', () => {
      const before = deepFreeze([])
      const action = deepFreeze({ 
        type: ''})
      const after = []
      expect(todos(before, action)).to.be.deep.equal(after)
    })
  })
  describe('Add Todo', () => {
    it('should add a todo item', () => {
      const before = deepFreeze([])
      const action = deepFreeze({ 
        type: ADD_TODO,
        payload: {
          id: 0,
          text: 'Hey'
        }
      })
      const after = [{
        id: 0,
        text: 'Hey',
        completed: false
      }]
      expect(todos(before, action)).to.be.deep.equal(after);
    })

    it('should add a new todo item', () => {
      const before = deepFreeze([])
      const action = deepFreeze({ 
        type: ADD_TODO,
        payload: {
          id: 0,
          text: 'HEYO'
        }
      })
      const after = [{
        id: 0,
        text: 'HEYO',
        completed: false
      }]
      expect(todos(before, action)).to.be.deep.equal(after);
    })
  })
  describe('Toggle Todo', () => {
    it('should toggle item', () => {
      const before = deepFreeze([
        { id: 0, text: 'hey', completed: false },
        { id: 1, text: 'ho', completed: false },
      ])
      const action = deepFreeze({ 
        type: TOGGLE_TODO,
        payload: { id: 0 }
      })
      const after = [
        { id: 0, text: 'hey', completed: true },
        { id: 1, text: 'ho', completed: false },
      ]
      expect(todos(before, action)).to.be.deep.equal(after);
    })
    it('should toggle another item', () => {
      const before = deepFreeze([
        { id: 0, text: 'hey', completed: false },
        { id: 1, text: 'ho', completed: false },
      ])
      const action = deepFreeze({ 
        type: TOGGLE_TODO,
        payload: { id: 1 }
      })
      const after = [
        { id: 0, text: 'hey', completed: false },
        { id: 1, text: 'ho', completed: true },
      ]
      expect(todos(before, action)).to.be.deep.equal(after);
    })
  })
})
