import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getData} from '../actions/exchangeAPI.action';
import {
    getUserAmount,
    getUserCurrency,
    getDataFromLocal,
    setDataToLocal, addData
} from "../actions/exchangeLocal.action";
import {v4 as uuidv4} from 'uuid';


const ExChangeForm = () => {
    const {currencyData} = useSelector((state) => state.exChangeAPI);
    const {amountFiled,currencyField} = useSelector(state => state.exChange);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getData());
        dispatch(getDataFromLocal())
    }, []);

    const generateCurrency = () => {
        const {rates} = currencyData;
        if (rates !== undefined) {
            const currencyArray = Object.keys(rates);
            const renderCurrency = currencyArray.map(item => {
                return <option key={uuidv4()} value={item}>{item}</option>
            });
            return renderCurrency;
        }
        return <option key={uuidv4()} value='nothing'>Nothing</option>
    }

    const submitCurrency = (e) => {
        e.preventDefault();
        dispatch(addData(currencyData,amountFiled, currencyField));
        dispatch(setDataToLocal())
    }

    return (
        <form onSubmit={submitCurrency}>
            <label htmlFor="currencyData">Currency: </label>
            <select id="currencyData" name="currency" value={currencyField} onChange={e => dispatch(getUserCurrency(e.target.value))}>
                {generateCurrency()}
            </select>
            <label htmlFor="amount">Amount: </label>
            <input type="number" id="amount" onChange={e => dispatch(getUserAmount(e.target.value))}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ExChangeForm;