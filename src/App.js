import React from 'react';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Exchange></Exchange>
      </Provider>
    </div>
  );
}

export default App;
