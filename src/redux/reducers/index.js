import resultsReducer from "./resultsReducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    results: resultsReducer
});

export default rootReducer;