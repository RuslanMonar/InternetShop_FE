import React, { useState } from "react";
import axios from "axios";
import classes from '../../css/style.module.css';

const SearchForm = () => {
    const [searchData, setSearchData] = useState("");

    const searchFunc = () => {
        if (searchData != "") {

            fetch("https://jsonplaceholder.typicode.com/todos", {
                method: 'POST',
                body: JSON.stringify({
                    searchItem: searchData
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
            setSearchData("");
        }
    }

    function handle(event) {
        setSearchData(() => event.target.value);
    }
    return (
        <div className={classes.search}>
            <input onChange={handle} value={searchData} placeholder="Пошук"></input>
            <div onClick = {() => searchFunc()}>
                <img src="/img/search-512.png" />
            </div>
        </div>
    )
}

export default SearchForm;
