import React, { useState } from "react";
import axios from "axios";
import classes from '../../css/style.module.css';
import api from '../Auth/ApiAxios';
import CartContext from './../../contexts/CartContext';
import { history } from './../../index';

const SearchForm = () => {
    const [searchData, setSearchData] = useState("");
    const {  ProductsList , setProductList , data , setData , ActiveLoader, setActiveLoader } = React.useContext(CartContext)

    const SearchFunc = () => {
        setActiveLoader(true);
        let data = { "name": searchData }
        api().post("/api/search", data).then(result => {
            if (result.status === 200) {
                setProductList(result.data.search.data)
                setData({ data: result.data.search });
                setActiveLoader(false)
                history.push('/products')
                
            }
        }).catch(err => {
            console.log('Помилка');
        })
    }


    function handle(event) {
        setSearchData(() => event.target.value);
    }
    return (
        <div className={classes.search}>
            <input onChange={handle} value={searchData} placeholder="Пошук"></input>
            <div onClick={() => SearchFunc()}>
                <img src="/img/search-512.png" />
            </div>
        </div>
    )
}

export default SearchForm;
