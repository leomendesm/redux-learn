import counters, {
    ADD_COUNTER,
    REMOVE_COUNTER,
    INCREMENT,
    DECREMENT,
    initialState
} from './index'

import { expect } from 'chai'

import deepFreeze from "deep-freeze";

describe('Counter Reducer', () => {
    it('Counters should be a function', () => {
        expect(counters).to.be.a('function')
    })
    it('Should return initial state if last state is undefined', () => {
        const before = undefined
        const action = deepFreeze({type:''})
        const after = initialState
        expect(counters(before, action)).to.be.deep.equal(after)
    })
    it('Should return the same state without action defined', () => {
        const before = deepFreeze([0])
        const action = deepFreeze({type:''})
        const after = [0]
        expect(counters(before, action)).to.be.deep.equal(after)
    })
    it('Should add a new Counter', () => {
        const before = deepFreeze([])
        const action = deepFreeze({type:ADD_COUNTER})
        const after = [0]
        expect(counters(before, action)).to.be.deep.equal(after)
    })
    it('Should add a new Counter again', () => {
        const before = deepFreeze([0,0])
        const action = deepFreeze({type:ADD_COUNTER})
        const after = [0, 0, 0]
        expect(counters(before, action)).to.be.deep.equal(after)
    })
    it('Should remove a Counter', () => {
        const before = deepFreeze([0,1,2])
        const action = deepFreeze({type:REMOVE_COUNTER, index: 1})
        const after = [0, 2]
        expect(counters(before, action)).to.be.deep.equal(after)
    })
    it('Should remove a Counter', () => {
        const before = deepFreeze([0,1,2])
        const action = deepFreeze({type:REMOVE_COUNTER, index: 2})
        const after = [0, 1]
        expect(counters(before, action)).to.be.deep.equal(after)
    })
    it('Should increment a Counter', () => {
        const before = deepFreeze([0,1])
        const action = deepFreeze({type:INCREMENT, index: 0})
        const after = [1, 1]
        expect(counters(before, action)).to.be.deep.equal(after)
    })
    it('Should increment another Counter', () => {
        const before = deepFreeze([1,1])
        const action = deepFreeze({type:INCREMENT, index: 0})
        const after = [2, 1]
        expect(counters(before, action)).to.be.deep.equal(after)
    })
    it('Should decrement a Counter', () => {
        const before = deepFreeze([0,1])
        const action = deepFreeze({type:DECREMENT, index: 1})
        const after = [0, 0]
        expect(counters(before, action)).to.be.deep.equal(after)
    })
    it('Should decrement a Counter', () => {
        const before = deepFreeze([1,1])
        const action = deepFreeze({type:DECREMENT, index: 0})
        const after = [0, 1]
        expect(counters(before, action)).to.be.deep.equal(after)
    })

})