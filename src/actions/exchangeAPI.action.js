import ExchangeApi from '../API/Exchange.api';
import types from './../types/exChangeAPI';

const api = new ExchangeApi();

export const fetchingData = (data) => {
  return {
    type: types.GET_DATA_FROM_API,
    payload: data,
  };
};

export const errorHandling = (err) => {
  return {
    type: types.ERROR_HANDLING,
    payload: err,
  };
};

export const getData = (dispatch, getState) => {
  return function (dispatch) {
    return api.getData().then((response) => {
      if (response.data) {
        dispatch(fetchingData(response.data));
      } else {
        dispatch(errorHandling(response.data.error.code));
      }
    });
  };
};
