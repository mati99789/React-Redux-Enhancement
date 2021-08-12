import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../actions/exchangeAPI.action';
import useRenderCurrencyRow from '../../Hooks/useRenderCurrencyRow';
import {
  getUserAmount,
  getUserCurrency,
  getDataFromLocal,
  setDataToLocal,
  addData,
} from '../../actions/exchangeLocal.action';
import generateCurrency from '../../helpers/generateCurrency';

const ExChangeForm = () => {
  const { currencyData, error } = useSelector((state) => state.exChangeAPI);
  const { currencyField } = useSelector((state) => state.exChange);
  const dispatch = useDispatch();
  const [data] = useRenderCurrencyRow();
  const { rates } = currencyData;

  useEffect(() => {
    dispatch(getData());
    dispatch(getDataFromLocal());
  }, [dispatch]);

  const submitCurrency = (e) => {
    e.preventDefault();
    dispatch(addData(data));
    dispatch(setDataToLocal());
  };

  return (
    <form
      onSubmit={submitCurrency}
      className="flex flex-col w-1/5 mt-6 mb-2 m-auto shadow-md p-2 bg-gray-50"
    >
      <label htmlFor="currencyData">Currency: </label>
      <select
        id="currencyData"
        name="currency"
        value={currencyField}
        onChange={(e) => dispatch(getUserCurrency(e.target.value))}
      >
        {generateCurrency(rates, error)}
      </select>
      <label htmlFor="amount">Amount: </label>
      <input
        className="bg-gray-200 focus:bg-white"
        type="number"
        placeholder="Type amount"
        id="amount"
        onChange={(e) => dispatch(getUserAmount(e.target.value))}
      />
      <button
        type="submit"
        className="bg-gray-200 hover:bg-gray-400 p-3 w-40 mt-2 m-auto rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default ExChangeForm;
