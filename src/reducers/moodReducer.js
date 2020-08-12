import {MOOD_ADD, MOOD_LIST, MOOD_DELETE} from '../actions/types';

const initialState = {
  moods: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOOD_LIST:
      return {...state};
    case MOOD_ADD: {
      const value = action.payload;
      const {moods} = state;
      moods.push({
        ...value,
        id: Math.random().toString(36).substr(2, 9),
        date: new Date(),
      });
      return {...state, moods};
    }
    case MOOD_DELETE: {
      const id = action.payload;
      const moods = state.moods.filter((mood) => mood.id !== id);
      return {...state, moods};
    }
    default:
      return state;
  }
};
