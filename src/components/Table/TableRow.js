import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const TableRow = () => {
  const { data } = useSelector((state) => state.exChange);

  const renderRow = () => {
    if (data !== undefined) {
      return data.map((row) => (
        <tr key={uuidv4()}>
          <td className="border border-green-600">{row.currencyField}</td>
          <td className="border border-green-600">{row.amountFiled}</td>
          <td className="border border-green-600">{row.date}</td>
          <td className="border border-green-600">{row.currencyValue}</td>
          <td className="border border-green-600">0</td>
          <td className="border border-green-600">0</td>
          <td className="border border-green-600">0</td>
        </tr>
      ));
    }
    return <p>Please enter some data!</p>;
  };
  return renderRow();
};

export default TableRow;
