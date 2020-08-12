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
		case MOOD_ADD:
            return { ...state };
		default:
			return state;
	}
};