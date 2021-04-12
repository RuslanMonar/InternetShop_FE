import React from 'react';
import "react-input-range/lib/css/index.css"
import '../../css/productsGrid.css'
import ProductItem from './ProductItem';
import api from '../../modules/Auth/ApiAxios'
import InputRange from 'react-input-range';


const Grid = () => {

    React.useEffect(() => {
        GetProductsList();
    }, [])
    
    const maxPriceDefault = 100000000000;
    const [ProductsList, setProductList] = React.useState();
    const [minPrice, setMinPrice] = React.useState(100);
    const [maxPrice, setMaxPrice] = React.useState(maxPriceDefault);
    const [filterPrice, setFilterPrice] = React.useState({ min: minPrice, max: maxPrice });
    const [lowerPrice, setLowerPrice] = React.useState({ min: minPrice });
    const [higherPrice, setHigherPrice] = React.useState({ max: maxPrice });
    const [filterParams, setFIlterParams] = React.useState({})



    const ChangePriceInput = (value, verge) => {

        var checkValue;

        if (verge === 'lowerPrice' && value !== null && lowerPrice.min !== null) {
            checkValue = Number(lowerPrice.min + value)
        }
        else if (verge === 'lowerPrice' && value !== null && lowerPrice.min === null) {
            checkValue = Number(value)
        }
        if (verge === 'higherPrice' && value !== null && higherPrice.max !== null) {
            checkValue = Number(higherPrice.max + value)
        }
        else if (verge === 'higherPrice' && value !== null && higherPrice.max === null) {
            checkValue = Number(value)
        }
        if (value === null) {
            checkValue = 1
        }
        if (typeof value === "string") {

            if (verge === 'lowerPrice') {
                if (lowerPrice.min !== null) {
                    if (Number(lowerPrice.min + value) <= maxPrice) {
                        setLowerPrice({ min: Math.abs(Number(lowerPrice.min + value)) });
                    }
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
                    if (Number(higherPrice.max + value) <= maxPrice) {
                        setHigherPrice({ max: Math.abs(Number(higherPrice.max + value)) });
                    }
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
                if (Math.floor(lowerPrice.min / 10) === 0 || lowerPrice.toString().lenght === 1) {
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
                if (Math.floor(higherPrice.max / 10) === 0 || higherPrice.toString().lenght === 1) {
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

    const GetProductsList = () => {
        api().get('/sanctum/csrf-cookie').then(response => {
            api().post("/api/products").then(result => {
                setProductsParams(result)
            })
        });
    }

    const FindByCateogry = (categoryName) => {
        let data = { name: categoryName }
        api().get('/sanctum/csrf-cookie').then(response => {
            api().post("/api/category", data).then(result => {
                setProductsParams(result)
            })
        });
    }

    const setProductsParams = (result) => {
        var result = result.data
        var price = result.price
        setProductList(result.products)
        setFilterPrice({ min: price.lowerPrice, max: price.higherPrice })
        setMaxPrice(price.higherPrice)
        setMinPrice(price.lowerPrice)
        setHigherPrice({ max: price.higherPrice })
        setLowerPrice({ min: price.lowerPrice })
    }

    const insertParam = (key, value) => {
        if (!filterParams[key]) {
            filterParams[key] = [];
        }
        if (filterParams[key].includes(value)) {
            filterParams[key] = filterParams[key].filter(e => e !== value);
        }
        else {
            filterParams[key].push(value)
        }
    }

    const filterByParams = () => {
        let data = { filterParams }
        console.log(data);
        api().get('/sanctum/csrf-cookie').then(response => {
            api().post("/api/filter", data).then(result => {
                setProductList(result.data.products)
            })
        });
    }

    return (
        <div className={'GridContainer'}>
            <div className={'filterForDbContainer'}>
                <div className={'manufacturer'}>
                    <span className={'CharacteristicTitle'}>Тип товару:</span>
                    <span onClick={() => GetProductsList()}>Всі</span>
                    <span onClick={() => FindByCateogry('Phone')}>Телефони</span>
                    <span onClick={() => FindByCateogry('Tablet')}>Планшети</span>
                    <span onClick={() => FindByCateogry('Laptop')}>Ноутбуки</span>
                </div>
                {maxPrice === maxPriceDefault ? (
                    <div></div>
                ) : (
                    <div>
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

                )
                }

                <br />
                <br />
                <div className={'FilterCheckbox'}>
                    <span>Screen TYPE</span>
                    <label> <input onChange={() => insertParam('screen_type', 'OLED')} type="checkbox" />OLED</label>
                    <label> <input onChange={() => insertParam('screen_type', 'AMOLED')} type="checkbox" />AMOLED</label>
                    <label> <input onChange={() => insertParam('screen_type', 'IPS')} type="checkbox" />IPS</label>
                    <br />
                    <br />
                    <span>RAM Memory</span>
                    <label> <input onChange={() => insertParam('ram', 4)} type="checkbox" />4</label>
                    <label> <input onChange={() => insertParam('ram', 6)} type="checkbox" />6</label>
                    <label> <input onChange={() => insertParam('ram', 8)} type="checkbox" />8</label>
                    <br />
                    <br />
                    <span>Виробник</span>
                    <label> <input onChange={() => insertParam('inner_memory', 256)} type="checkbox" />256</label>
                    <label> <input onChange={() => insertParam('inner_memory', 64)} type="checkbox" />64</label>
                    <label> <input onChange={() => insertParam('inner_memory', 32)} type="checkbox" />32</label>
                    <br />
                    <br />

                    <span onClick={() => filterByParams()}>Прийняти зміни</span>
                </div>
            </div>
            <div className={'productsContainer'}>
                {ProductsList ? (ProductsList.map(item => <ProductItem key={item.id} {...item} />)) : (null)}
            </div>
        </div>
    )
}

export default Grid