const initialState = {
  amountFiled: '',
  currencyField: 'AED',
  data: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'getUserAmount':
      return {
        ...state,
        amountFiled: action.payload,
      };
    case 'getUserCurrency':
      return {
        ...state,
        currencyField: action.payload,
      };
    case 'setDataFromLocal':
      return {
        ...state,
        data: action.payload,
      };
    case 'addData':
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default reducers;
