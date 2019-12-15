import types from './types';

const initialState = {
  loading: false,
  error: false,
  ids: [],
  itemsObj: {},
};

const reducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case types.GET_ITEMS_START:
      return getItemsStart(state, payload);
    case types.GET_ITEMS_SUCCESS:
      return getItemsSuccess(state, payload);
    case types.GET_ITEMS_FAIL:
      return getItemsFail(state, payload);
    default:
      return state;
  }
};

const getItemsStart = state => ({
  ...state,
  loading: true,
  error: false,
});

const getItemsSuccess = (state, payload) => ({
  ...state,
  loading: false,
  ids: payload.ids,
  itemsObj: payload.itemsObj,
});

const getItemsFail = state => ({
  ...state,
  loading: false,
  error: true,
});

export default reducer;
