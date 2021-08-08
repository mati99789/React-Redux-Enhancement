import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getData} from './exChangeAPIAction';
import {v4 as uuidv4} from 'uuid';


const ExChangeForm = () => {
    const {currencyData} = useSelector((state) => state.exChangeAPI)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getData())
    }, []);

    const generateCurrency = () => {
        const {rates} = currencyData;
        if (rates !== undefined) {
            return Object.entries(rates).map(([key, value]) => {
                return <option key={uuidv4()} value={key}>{key}</option>
            })
        }
        return <option key={uuidv4()} value='nothing'>Nothing</option>
    }

    return (
        <form>
            <label htmlFor="currencyData">Currency</label>
            <select name="currency" id="currencyData">
                {generateCurrency()}
            </select>
        </form>
    )
}

export default ExChangeForm;