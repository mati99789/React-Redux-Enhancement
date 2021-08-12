import React from 'react';
import { useSelector } from 'react-redux';
import { getExchangeValue } from '../helpers/getExchangeValue';

const UseCountCurrentCurrency = () => {
  const { currencyData } = useSelector((state) => state.exChangeAPI);
  const { data } = useSelector((state) => state.exChange);
  const { rates } = currencyData;

  const getCurrentlyCurrency = (currency) => {
    return getExchangeValue(rates, currency);
  };

  const difference = (purchaseSum, currentlyValueSum) => {
    return `${(currentlyValueSum - purchaseSum).toFixed(2)} `;
  };

  const renderTableRows = () => {
    const row = data.map((item) => {
      const {
        amountFiled,
        currencyField,
        id,
        date,
        currencyValue,
        purchaseSum,
      } = item;
      const currentlyCurrency = getCurrentlyCurrency(currencyField);
      const currentlyValue = (amountFiled * currentlyCurrency).toFixed(2);
      const differenceSum = difference(purchaseSum, currentlyValue);
      const diffPercent = (
        (currentlyCurrency - currencyValue) /
        (currencyValue * 100)
      ).toFixed(2);

      return (
        <tr key={id}>
          <td className="border border-green-600">{currencyField}</td>
          <td className="border border-green-600">{amountFiled}</td>
          <td className="border border-green-600">{date}</td>
          <td className="border border-green-600">{currencyValue}</td>
          <td className="border border-green-600">{currentlyCurrency}</td>
          <td className="border border-green-600">{currentlyValue}</td>
          <td className="border border-green-600">{`${differenceSum} (${diffPercent}%)`}</td>
        </tr>
      );
    });

    return <tbody>{row}</tbody>;
  };

  return [renderTableRows()];
};

export default UseCountCurrentCurrency;
