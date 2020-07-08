import { combineReducers } from 'redux';
import storieReducer from './storieReducer';


export default combineReducers({
    stories: storieReducer
})