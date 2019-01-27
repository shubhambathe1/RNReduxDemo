import { INCREASE_COUNTER, DECREASE_COUNTER, FETCH_HEROES_LIST, GET_COLOR } from './actionTypes';

export const increaseCounter = () => ({
    type: INCREASE_COUNTER,
})

export const decreaseCounter = () => ({
    type: DECREASE_COUNTER,
})

// export const getColor = colors => {
//     return {
//         type: GET_COLOR,
//         colors: colors
//     };
// };

export const fetchHeroesList = heroesList => {
    return {
        type: FETCH_HEROES_LIST,
        heroesList: heroesList
    };
};