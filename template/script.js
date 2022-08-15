// Select DOM Elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// Initial state 
const initState = {
    value: 0
}

// create reducer function
function counterReducer(state = initState, action){
    if(action.type === 'increment'){
        return {
            ...state,
            value : state.value + 1
        }
    } else if(action.type === 'decrement'){
        return {
            ...state,
            value : state.value - 1
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
    store.dispatch({
        type: 'increment'
    });
});

decrementEl.addEventListener("click", () => {
    store.dispatch({
        type: 'decrement'
    });
});