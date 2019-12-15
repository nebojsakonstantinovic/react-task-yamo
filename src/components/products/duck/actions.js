import types from './types';

const getItemsStart = () => ({
  type: types.GET_ITEMS_START,
});

const getItemsSuccess = payload => ({
  type: types.GET_ITEMS_SUCCESS,
  payload,
});

const getItemsFail = () => ({
  type: types.GET_ITEMS_FAIL,
});

export default {
  getItemsStart,
  getItemsSuccess,
  getItemsFail,
};
