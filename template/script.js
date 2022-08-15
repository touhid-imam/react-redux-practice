// Select DOM Elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// action identifiers
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    }
}

const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    }
}

// Initial state 
const initState = {
    value: 0
}

// create reducer function
function counterReducer(state = initState, action){
    if(action.type === INCREMENT){
        return {
            ...state,
            value : state.value + action.payload
        }
    } else if(action.type === DECREMENT){
        return {
            ...state,
            value : state.value - action.payload
        }
    } else{
        return state
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
}
// Update UI Initially
render();

store.subscribe(render);

// Button Click Listener
incrementEl.addEventListener("click", () => {
    store.dispatch(increment(2));
});

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(2));
});