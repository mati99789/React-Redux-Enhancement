import { useSelector } from 'react-redux';

const useCurrencyData = () => {
  const { currencyData } = useSelector((state) => state.exChangeAPI);
  const { amountFiled, currencyField } = useSelector((state) => state.exChange);
  const { rates, date } = currencyData;

  const getCourse = (rates) => {
    if (rates !== undefined) {
      for (const [key, value] of Object.entries(rates)) {
        if (currencyField === key) {
          return value;
        }
      }
    }
  };

  const countCurrentlyCurrency = (currencyValue) => {
    return (amountFiled * currencyValue).toFixed(2);
  };

  const dataForTables = () => {
    const currencyValue = getCourse(rates);
    const currentValue = countCurrentlyCurrency(currencyValue);
    const data = {
      amountFiled,
      currencyField,
      currencyValue,
      date,
      currentValue,
    };
    return data;
  };

  return [dataForTables()];
};

export default useCurrencyData;
