const initialState = {
    amountFiled: '',
    currencySubmitetData: [],
    currencyField: 'AED',
    data: [],
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'getUserAmount':
            return {
                ...state,
                amountFiled: action.payload,
            };
        case 'getUserCurrency':
            return{
                ...state,
                currencyField: action.payload
            };
        case 'setDataFromLocal':
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case 'addData':
            const {userAmount, userCurrency, data} = action.payload;
            return {
                ...state,
                data: [...state.data, {userCurrency, data, userAmount}]
            };
        default: return state;
    }
}

export default reducers;