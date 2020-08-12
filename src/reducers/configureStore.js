import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import moodReducer from './moodReducer';

const rootReducer = combineReducers({
    mood: moodReducer
    //add more reducer here.
});

export default () => {
	let store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
	return { store };
};