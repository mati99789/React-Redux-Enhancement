import React from 'react';
import ExChangeForm from './Form/ExChangeForm';
import Header from './Header/Header';
import ExchangeTable from './Table/ExchangeTable';

const Exchange = () => {
  return (
    <>
      <Header />
      <ExChangeForm />
      <ExchangeTable />
    </>
  );
};

export default Exchange;
