import {
    MOOD_ADD,
    MOOD_LIST,
    MOOD_DELETE
} from '../actions/types';

const initialState = {
	moods: [],
	loading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case MOOD_LIST:
            return { ...state };
		case MOOD_ADD:
			const value = action.payload;
			const { moods } = state;
			moods.push(value);
            return { ...state, moods };
		case MOOD_DELETE:
            return { ...state };
		default:
			return state;
	}
};