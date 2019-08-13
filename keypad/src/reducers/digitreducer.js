

export function digitreducer(state,action) {
    console.log('digitreducer triggered');
    console.log('state digits: ', state);
    console.log('action: ', action);

    switch(action.type) {
        case "DIGIT":
            return {
                ...state,
                digit: [...state.digit, action.digit]
            }
        default: 
            return state;
    }
}

