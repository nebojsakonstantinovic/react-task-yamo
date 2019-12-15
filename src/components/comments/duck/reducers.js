import types from './types';

const initialState = {};

const reducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case types.GET_COMMENTS:
      return getComments(state, payload);
    case types.GET_COMMENTS_FAIL:
      return getCommentsFail(state, payload);
    case types.SAVE_COMMENTS:
      return saveComments(state, payload);
    case types.DELETE_COMMENTS:
      return deleteComments(state, payload);
    default:
      return state;
  }
};
const saveComments = (state, payload) => {
  const newState = {
    ...state,
    [payload.id]: {
      ...state[payload.id],
      // [payload.subject]: payload.text
    },
  };

  // need to delete so updated comments would come to the top
  delete newState[payload.id][payload.subject];
  newState[payload.id][payload.subject] = payload.text;

  const serializedState = JSON.stringify(newState);
  localStorage.setItem('comments', serializedState);
  return newState;
};

const deleteComments = (state, payload) => {
  const newState = {
    ...state,
    [payload.id]: {
      ...state[payload.id],
    },
  };
  delete newState[payload.id][payload.subject];

  const serializedState = JSON.stringify(newState);
  localStorage.setItem('comments', serializedState);
  return newState;
};

const getComments = (state, payload) => ({
  ...state,
  ...payload,
});

const getCommentsFail = state => ({
  ...state,
});

export default reducer;
