'use strict'

const counter = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT': return ++state
        case 'DECREMENT': return --state
        default: return state
    }
}

console.assert(
    counter(0, {type: 'INCREMENT'}) === 1,
    'increment action'
)

console.assert(
    counter(0, {type: 'DECREMENT'}) === -1,
    'DECREMENT action'
)

console.assert(
    counter(undefined, {type: ''}) === 0,
    'NO PARAM action'
)