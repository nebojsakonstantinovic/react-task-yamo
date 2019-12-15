import types from './types';

const getComments = payload => ({
  type: types.GET_COMMENTS,
  payload,
});

const saveComments = payload => ({
  type: types.SAVE_COMMENTS,
  payload,
});

const getCommentsFail = () => ({
  type: types.GET_COMMENTS_FAIL,
});

const deleteComments = payload => ({
  type: types.DELETE_COMMENTS,
  payload,
});

export default {
  getComments,
  getCommentsFail,
  saveComments,
  deleteComments,
};
