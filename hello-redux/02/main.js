'use strict'

const counter = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT': return ++state
        case 'DECREMENT': return --state
        default: return state
    }
}


const { createStore } = Redux;

const store = createStore(counter)

store.subscribe(() => console.log(store.getState()))

store.dispatch({type: 'INCREMENT'})

store.dispatch({type: 'DECREMENT'})

