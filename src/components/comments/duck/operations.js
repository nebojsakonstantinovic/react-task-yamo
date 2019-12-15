import actions from './actions';

const { getComments, getCommentsFail, saveComments, deleteComments } = actions;

const loadComments = () => async dispatch => {
  try {
    const serializedState = localStorage.getItem('comments');
    if (serializedState === null) {
      dispatch(getCommentsFail());
    } else {
      dispatch(getComments(JSON.parse(serializedState)));
    }
  } catch ({ response }) {
    dispatch(getCommentsFail());
  }
};

export default {
  getComments,
  getCommentsFail,
  saveComments,
  deleteComments,
  loadComments,
};
