import React from 'react';
import { useSelector } from 'react-redux';
import useCountCurrentCurrency from './../../Hooks/useCountCurrentCurrency';

const TableRow = () => {
  const [row] = useCountCurrentCurrency();

  return <>{row}</>;
};

export default TableRow;
