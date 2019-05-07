import { FETCH_HEROES_LIST } from '../actions/actionTypes';

const initialState = {
    heroesList: []
}

export default storeHeroesListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HEROES_LIST:
            return {
                ...state,
                heroesList: action.heroesList
            }
        //case 'DECREASE_COUNTER':
        //    return { counter: state.counter - 1 }
    }
    return state;
}