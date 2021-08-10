import exchangeApi from '../API/exchange.api';

const api = new exchangeApi();

export const fetchingData = (data) => {
  return {
    type: 'getDataFromAPI',
    payload: data,
  };
};

export const getData = (dispatch, getState) => {
  return function (dispatch) {
    return api
      .getData()
      .then((response) => dispatch(fetchingData(response.data)));
  };
};
