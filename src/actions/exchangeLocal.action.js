import LocalStorage from '../localStorage/localStorage';
import types from './../types/exChange';

const localStorage = new LocalStorage();

export const getUserAmount = (amount) => {
  return {
    type: types.GET_USER_AMOUT,
    payload: amount,
  };
};

export const getUserCurrency = (currency) => {
  return {
    type: types.GET_USER_CURRENCY,
    payload: currency,
  };
};

export const setDataFromLocal = (data) => {
  return {
    type: types.SET_DATA_FROM_LOCAL,
    payload: data,
  };
};

export const addData = (data) => (dispatch, getState) => {
  dispatch({
    type: types.ADD_DATA,
    payload: data,
  });
  const store = getState();
  localStorage.setData(store.exChange.data);
};

export const getDataFromLocal = () => (dispatch) => {
  const localStorageData = localStorage.getData();
  dispatch(setDataFromLocal(localStorageData));
};
