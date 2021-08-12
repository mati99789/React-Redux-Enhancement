export const getExchangeValue = (rates, currencyField) => {
  if (rates !== undefined) {
    for (const [key, value] of Object.entries(rates)) {
      if (currencyField === key) {
        return value;
      }
    }
  }
};
