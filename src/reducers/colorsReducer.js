const initialState = {
    colors: {
        color1: "gray",
        color2: "yellow",
    }
}

export default function colorsReducer(state = initialState, action) {
    // switch (action.type) {
    //     case 'INCREASE_COUNTER':
    //         return { counter: state.counter + 1 }
    //     case 'DECREASE_COUNTER':
    //         return { counter: state.counter - 1 }
    //     // case 'GET_COLOR':
    //     //     return {
    //     //         ...state,
    //     //         colors: action.colors
    //     //     };
    // }
    return state;
}