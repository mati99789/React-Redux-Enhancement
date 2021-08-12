import React from 'react';
import TableRow from './TableRow';

const ExchangeTable = () => {
  return (
    <table className="border-collapse border border-green-800 w-1/2 mt-20 m-auto">
      <thead>
        <tr>
          <th className="border border-green-600 ...">Currency</th>
          <th className="border border-green-600 ...">Amount</th>
          <th className="border border-green-600 ...">Date of purchase</th>
          <th className="border border-green-600 ...">Purchase price</th>
          <th className="border border-green-600 ...">Current price</th>
          <th className="border border-green-600 ...">Current value</th>
          <th className="border border-green-600 ...">Win/Loss</th>
        </tr>
      </thead>
      <TableRow />
    </table>
  );
};

export default ExchangeTable;
