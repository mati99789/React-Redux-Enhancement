import exChangeAPI from "../components/exChange.api";

const api = new exChangeAPI()

export const fetchingData = (data) => {
    return {
        type: 'getDataFromAPI',
        payload: data
    }
}

export const  getData = (dispatch, getState) => {
    return function(dispatch) {
        return api.getData().then(response => dispatch(fetchingData(response.data)))
    }
}