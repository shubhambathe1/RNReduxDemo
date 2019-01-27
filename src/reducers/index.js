import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import storeHeroesListReducer from './storeHeroesListReducer';
import colorsReducer from './colorsReducer';

export default combineReducers({
    counterReducer,
    storeHeroesListReducer,
    colorsReducer,
})