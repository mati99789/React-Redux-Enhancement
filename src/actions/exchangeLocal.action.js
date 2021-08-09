import LocalStorage from "../localStorage/localStorage";

const localStorage = new LocalStorage();

export const getUserAmount = (amount) => {
    return {
        type: 'getUserAmount',
        payload: amount
    }
}

export const getUserCurrency = (currency) => {
    return {
        type: 'getUserCurrency',
        payload: currency
    }
}

export const setDataFromLocal = (data) => {
    return {
        type: 'currencyData',
        payload: data,
    }
}

export const addData = (data, userAmount, userCurrency) => {
    return {
        type: 'addData',
        payload: {
            data,
            userAmount,
            userCurrency
        }
    }
}

export const getDataFromLocal = () => (dispatch, getState) => {
    const localStorageData = localStorage.getDataFromLocal();
    dispatch(setDataFromLocal(localStorageData));
}

export const setDataToLocal = () => (dispatch, getState) => {
    const store = getState();
    localStorage.setNewDataToLocal(store.exChange.data);
}