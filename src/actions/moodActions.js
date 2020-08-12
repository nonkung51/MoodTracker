import {MOOD_LIST, MOOD_DELETE, MOOD_ADD} from './types';

export const moodAdd = (value) => {
  return {
    type: MOOD_ADD,
    payload: value,
  };
};

export const moodDelete = (value) => {
  return {
    type: MOOD_DELETE,
    payload: value,
  };
};

export const moodList = () => {
	return {
		type: MOOD_LIST
	}
}