import counters from './index'

import { expect } from 'chai'

import deepFreeze from "deep-freeze";

describe('Counter Reducer', () => {
    it('Counters should be a function', () => {
        expect(counters).to.be.a('function')
    })
    it('Should return the same state without state', () => {
        const before = deepFreeze([0])
        const action = deepFreeze({type:''})
        const after = [0]
        expect(counters(before, action)).to.be.deep.equal(after)
    })
    it('Should add a new Counter', () => {
        const before = deepFreeze([])
        const action = deepFreeze({type:'ADD_COUNTER'})
        const after = [0]
        expect(counters(before, action)).to.be.deep.equal(after)
    })
    it('Should add a new Counter again', () => {
        const before = deepFreeze([0,0])
        const action = deepFreeze({type:'ADD_COUNTER'})
        const after = [0, 0, 0]
        expect(counters(before, action)).to.be.deep.equal(after)
    })
    it('Should remove a Counter', () => {
        const before = deepFreeze([0,1,2])
        const action = deepFreeze({type:'REMOVE_COUNTER', index: 1})
        const after = [0, 2]
        expect(counters(before, action)).to.be.deep.equal(after)
    })
    it('Should remove a Counter', () => {
        const before = deepFreeze([0,1,2])
        const action = deepFreeze({type:'REMOVE_COUNTER', index: 2})
        const after = [0, 1]
        expect(counters(before, action)).to.be.deep.equal(after)
    })
})