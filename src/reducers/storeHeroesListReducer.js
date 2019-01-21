const initialState = {
    heroesList: []
}

export default function storeHeroesListReducer(state = initialState, action) {
    switch (action.type) {
        case 'STORE_HEROES':
            return [
                ...state, hList
            ]
        //case 'DECREASE_COUNTER':
        //    return { counter: state.counter - 1 }
    }
    return state;
}