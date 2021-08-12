const generateCurrency = (rates, error) => {
  if (rates !== undefined) {
    const currencyArray = Object.keys(rates);
    const renderCurrency = currencyArray.map((item) => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });
    return renderCurrency;
  }
  return (
    <option key={error} value="nothing">
      {error}
    </option>
  );
};

export default generateCurrency;
