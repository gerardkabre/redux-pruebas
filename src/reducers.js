const DEFAULT_STATE = {
    term : "default term"
}

const setTermReducer = (state, action) => {
    return Object.assign({}, state, { term: action.payload })
}

 const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SET_TERM':
            return setTermReducer(state, action); 
            break;
        default:
            return state; 
    }
}

export default rootReducer;

