import {MOOD_LIST, MOOD_DELETE, MOOD_ADD} from './types';

export const moodAdd = (value) => {
  return {
    type: MOOD_ADD,
    payload: value,
  };
};

export const moodDelete = (id) => {
  return {
    type: MOOD_DELETE,
    payload: id,
  };
};

export const moodList = () => {
	return {
		type: MOOD_LIST
	}
}