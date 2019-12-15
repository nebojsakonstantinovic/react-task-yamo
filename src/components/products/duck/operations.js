import axios from 'axios';
import actions from './actions';

const { getItemsStart, getItemsSuccess, getItemsFail } = actions;

/**
 * function that maps data for state on front-end
 * @param {array} data array that comes from back-end
 * @returns {object} object with array of ids and itemsObj which keys are those ids
 */

const dataMapper = data => {
  const mappedData = {
    ids: [],
    itemsObj: {},
  };
  data.forEach(item => {
    mappedData.ids.push(item.id);
    mappedData.itemsObj = {
      ...mappedData.itemsObj,
      [item.id]: { ...item },
    };
  });

  return mappedData;
};

const getItems = () => async dispatch => {
  try {
    dispatch(getItemsStart());
    const response = await axios.get(
      'http://private-5815fe-recommendationsknip.apiary-mock.com/products'
    );

    dispatch(getItemsSuccess(dataMapper(response.data)));
  } catch ({ response }) {
    dispatch(getItemsFail());
  }
};

export default {
  getItemsStart,
  getItemsSuccess,
  getItemsFail,
  getItems,
};
