import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import storeHeroesListReducer from './storeHeroesListReducer';

export default combineReducers({
    counterReducer,
    storeHeroesListReducer,
})