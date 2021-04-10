import React from 'react';
import ReactDOM from 'react-dom';
import "react-input-range/lib/css/index.css"
import '../../css/productsGrid.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart, faComment } from "@fortawesome/free-solid-svg-icons";
import StarRatings from 'react-star-ratings';
import ProductItem from './ProductItem';
import api from '../../modules/Auth/ApiAxios'
import InputRange from 'react-input-range';


const Grid = () => {

    // const GetProductsList = () => {
    //     api().get('/sanctum/csrf-cookie').then(response => {
    //         api().post("/api/products").then(result => {
    //             setProductList(result.data.products)
    //             return result.data.products
    //         })
    //     });
    // }

    // const [ProductsList, setProductList] = React.useState(() => GetProductsList());
    const minPrice = 0;
    const maxPrice = 1000;
    const [filterPrice, setFilterPrice] = React.useState({ min: minPrice, max: maxPrice });
    const [lowerPrice, setLowerPrice] = React.useState({ min: minPrice });
    const [higherPrice, setHigherPrice] = React.useState({ max: maxPrice });



    const ChangePriceInput = (value, verge) => {

        var checkValue;

        if (verge == 'lowerPrice' && value !== null && lowerPrice.min !== null) {
            checkValue = Number(lowerPrice.min + value)
        }
        else if (verge == 'lowerPrice' && value !== null && lowerPrice.min === null) {
            checkValue = Number(value)
        }
        if (verge == 'higherPrice' && value !== null && higherPrice.max !== null) {
            checkValue = Number(higherPrice.max + value)
        }
        else if (verge == 'higherPrice' && value !== null && higherPrice.max === null) {
            checkValue = Number(value)
        }
        if (value === null) {
            checkValue = 1
        }
        console.log(checkValue)
        if (typeof value === "string" && checkValue >= minPrice && checkValue <= maxPrice) {
            if (verge === 'lowerPrice') {
                if (lowerPrice.min !== null) {
                    setLowerPrice({ min: Number(lowerPrice.min + value) });
                    if (Number(lowerPrice.min + value) < higherPrice.max) {
                    setFilterPrice(filterPrice => ({
                        ...filterPrice, min: Number(lowerPrice.min + value)
                    }));
                }
                }
                else {
                    setLowerPrice({ min: value });
                    setFilterPrice(filterPrice => ({
                        ...filterPrice, min: 0
                    }));
                }
            }
            else if (verge === 'higherPrice') {
                if (higherPrice.max !== null) {
                    setHigherPrice({ max: Number(higherPrice.max + value) });
                    if (Number(higherPrice.max + value) > lowerPrice.min) {
                        setFilterPrice(filterPrice => ({
                            ...filterPrice, max: Number(higherPrice.max + value)
                        }));
                    }
                }
                else {
                    setHigherPrice({ max: Number(value) });
                    setFilterPrice(filterPrice => ({
                        ...filterPrice, max: lowerPrice.min + 50
                    }));
                }
            }
        }
        else if (typeof value === "object" && value === null) {
            var newValue;
            if (verge === 'lowerPrice') {
                if (Math.floor(lowerPrice.min / 10) === 0 || lowerPrice.toString().lenght == 1) {
                    newValue = null;
                }
                else {
                    newValue = Math.floor(lowerPrice.min / 10);
                }
                setLowerPrice({ min: newValue });
                if (newValue >= minPrice && newValue <= maxPrice && newValue !== null && newValue < higherPrice.max) {
                    setFilterPrice(filterPrice => ({
                        ...filterPrice, min: Number(newValue)
                    }));
                }
                if (newValue === null) {
                    setFilterPrice(filterPrice => ({
                        ...filterPrice, min: 0
                    }));
                }
            }
            else if (verge === 'higherPrice') {
                if (Math.floor(higherPrice.max / 10) === 0 || higherPrice.toString().lenght == 1) {
                    newValue = null;
                }
                else {
                    newValue = Math.floor(higherPrice.max / 10);
                }
                setHigherPrice({ max: newValue });
                if (newValue >= minPrice && newValue <= maxPrice && newValue !== null && newValue > lowerPrice.min) {
                    setFilterPrice(filterPrice => ({
                        ...filterPrice, max: Number(newValue)
                    }));
                }
                if (newValue === null) {
                    setFilterPrice(filterPrice => ({
                        ...filterPrice, max: lowerPrice.min + 50
                    }));
                }
            }
        }
    }

    return (
        <div className={'GridContainer'}>
            <div className={'filterForDbContainer'}>
                <div className={'manufacturer'}>
                    <span className={'CharacteristicTitle'}>Тип товару:</span>
                    <span>Всі</span>
                    <span>Телефони</span>
                    <span>Планшети</span>
                    <span>Ноутбуки</span>
                </div>

                <div className={'input-range-field'}>

                    <input onChange={value => ChangePriceInput(value.nativeEvent.data, 'lowerPrice')}
                        type="text"
                        className={'filterPriceInput ' + (lowerPrice.min > higherPrice.max ? 'filterPriceInputError' : 'filterPriceInputOk')}
                        value={lowerPrice.min} />
                        

                    <input onChange={value => ChangePriceInput(value.nativeEvent.data, 'higherPrice')}
                        type="text"
                        className={'filterPriceInput ' + (higherPrice.max < lowerPrice.min ? 'filterPriceInputError' : 'filterPriceInputOk')}
                        value={higherPrice.max} />
                </div>
                <InputRange
                    maxValue={maxPrice}
                    minValue={minPrice}
                    value={filterPrice}
                    onChange={value => { setFilterPrice(value); setLowerPrice(value); setHigherPrice(value) }}
                />
            </div>
            <div className={'productsContainer'}>
                {/* {ProductsList ? (ProductsList.map(item => <ProductItem key={item.id} {...item} />)) : (null)} */}
            </div>
        </div>
    )
}

export default Grid