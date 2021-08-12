import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getExchangeValue } from '../helpers/getExchangeValue';

const useRenderCurrencyRow = () => {
  const { currencyData } = useSelector((state) => state.exChangeAPI);
  const { amountFiled, currencyField } = useSelector((state) => state.exChange);
  const { rates, date } = currencyData;

  const countPurchaseCurrency = (currencyValue) => {
    return (amountFiled * currencyValue).toFixed(2);
  };

  const dataForTables = () => {
    const currencyValue = getExchangeValue(rates, currencyField);
    const purchaseSum = countPurchaseCurrency(currencyValue);
    const data = {
      amountFiled,
      currencyField,
      currencyValue,
      date,
      purchaseSum,
      id: uuidv4(),
    };
    return data;
  };

  return [dataForTables()];
};

export default useRenderCurrencyRow;
