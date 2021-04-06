import React, { useState } from "react";
import axios from "axios";
import classes from '../../css/style.module.css';
import api from '../Auth/ApiAxios';

const SearchForm =  () => {
    const [searchData, setSearchData] = useState("");


    const SearchFunc = () => {
        let data = {"name":searchData}
            api().post("/api/search", data).then(result => {
                if (result.status === 200){
                    console.log(result.data.search)
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
            <div onClick = {() => SearchFunc()}>
                <img src="/img/search-512.png" />
            </div>
        </div>
    )
}

export default SearchForm;
