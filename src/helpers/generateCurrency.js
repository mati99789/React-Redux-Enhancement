import { v4 as uuidv4 } from 'uuid';

const generateCurrency = (rates) => {
  if (rates !== undefined) {
    const currencyArray = Object.keys(rates);
    const renderCurrency = currencyArray.map((item) => {
      return (
        <option key={uuidv4()} value={item}>
          {item}
        </option>
      );
    });
    return renderCurrency;
  }
  return (
    <option key={uuidv4()} value="nothing">
      Nothing
    </option>
  );
};

export default generateCurrency;
