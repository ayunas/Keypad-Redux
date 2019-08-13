

export function digitreducer(state,action) {
    console.log('digitreducer triggered');
    console.log('state digits: ', state);
    console.log('action: ', action);

    switch(action.type) {
        case "DIGIT":
            return state.digit.length <= 6 ? 
            {...state, digit: [...state.digit, action.digit] } 
            : state;
           
        default: 
            return state;
    }
}