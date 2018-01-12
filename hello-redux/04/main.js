'use strict'

const counter = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT': return ++state
        case 'DECREMENT': return --state
        default: return state
    }
}


const createStore = reducer => {
    let state
    let subscriptions = []

    const dispatch = (action) => {
        state = reducer(state, action)
        subscriptions.forEach(f => f())
    }

    const subscribe = (func) => subscriptions.push(func)

    const unsubscribe = (func) => subscriptions.filter(f => f !== func)

    dispatch({})

    return {
        getState: () => state,
        dispatch,
        subscribe
    }
};

const store = createStore(counter)

const $counter = document.querySelector('[data-js="counter"]')
const $decrement = document.querySelector('[data-js="decrement"]')
const $increment = document.querySelector('[data-js="increment"]')

$decrement.addEventListener('click', decrement, false)
$increment.addEventListener('click', increment, false)

function decrement() {
    store.dispatch({type: 'DECREMENT'})
}

function increment() {
    store.dispatch({type: 'INCREMENT'})
}

function render() {
    $counter.textContent = store.getState()
}

store.subscribe(render)

render()