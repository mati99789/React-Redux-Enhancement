const initialState = {
  currencyData: [],
  error: '',
};

const exChangeAPIReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getDataFromAPI':
      return {
        ...state,
        currencyData: action.payload,
      };
    case 'errorHandling':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default exChangeAPIReducer;
