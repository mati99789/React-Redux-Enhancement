const initialState = {
  currencyData: [],
};

const exChangeAPIReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getDataFromAPI':
      return {
        ...state,
        currencyData: action.payload,
      };
    default:
      return state;
  }
};

export default exChangeAPIReducer;
