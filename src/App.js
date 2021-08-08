import React from 'react';
import Exchange from "./components/Exchange";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './reducers/index';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
function App() {
  return (
    <div className='font-mono bg-indigo-50'>
      <Provider store={store}>
        <Exchange />
      </Provider>
    </div>
  );
}

export default App;
