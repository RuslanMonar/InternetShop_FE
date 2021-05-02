import React from 'react';
import "react-input-range/lib/css/index.css"
import '../../css/productsGrid.css'
import ProductItem from './ProductItem';
import api from '../../modules/Auth/ApiAxios'
import InputRange from 'react-input-range';
import PhonesFilter from './PhonesFilter';
import LaptopFilter from './LaptopFilter';
import TabletFilter from './TabletFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Rodal from 'rodal';

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
    const [filterParams, setFIlterParams] = React.useState({ manufacturer: [] })
    const [Phone, setPhone] = React.useState(false)
    const [Laptop, setLaptop] = React.useState(false)
    const [Tablet, setTablet] = React.useState(false)
    const [filterIcon, setFIlterIcon] = React.useState(false)
    const [ActiveLoader, setActiveLoader] = React.useState(false)
    const [PorductNotFound, setPorductNotFound] = React.useState(false)



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
        setActiveLoader(true);
        api().post("/api/products").then(result => {
            setProductsParams(result)
            setActiveLoader(false);
        })
    }

    const FindByCateogry = (categoryName) => {
        setActiveLoader(true);
        let data = { name: categoryName }
        api().post("/api/category", data).then(result => {
            setProductsParams(result)
            setActiveLoader(false);
        })
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

    const insertParam = (key, value, searchType = null) => {
        let delteArray = false;
        if (!filterParams[key]) {
            filterParams[key] = [];
        }
        if (value && searchType) {
            if (filterParams[key][0] !== searchType) {
                filterParams[key].unshift(searchType);
            }
            if (value && Array.isArray(value)) {
                filterParams[key].forEach(element => {
                    if (element.length === value.length && element.every(function (val, index) { return val === value[index] })) {
                        let elementIndex = filterParams[key].indexOf(element);
                        filterParams[key].splice(elementIndex, 1);
                        delteArray = true;
                    }
                });
            }

        }
        if (key === 'lower_price' || key === 'higher_price') {
            filterParams[key].pop()
        }
        if (filterParams[key].includes(value)) {
            filterParams[key] = filterParams[key].filter(e => e !== value);

        }
        else {
            if (!delteArray) {
                filterParams[key].push(value)
            }
        }
    }

    const filterByParams = (type) => {
        setActiveLoader(true);
        insertParam('lower_price', lowerPrice.min)
        insertParam('higher_price', higherPrice.max)
        let data = { filterParams, type }
        api().post("/api/filter", data).then(result => {
            console.log(result.data.products)
            setActiveLoader(false);
            if (Object.keys(result.data.products).length > 0) {
                setProductsParams(result)
            }
            else {
                console.log()
                setPorductNotFound(true);
            }
        })
    }

    const test = (value) => {
        if (value === 'Phone') {

        }
    }

    const keyMap = {
        Phone: false,
        Laptop: false,
        Table: false
    }

    return (
        <div className={'GridContainer'}>
            {ActiveLoader ? (<Loader className={'loaderSpiner'} type="Oval" color="black" height={200} width={200} />) : (null)}
            <div className={'filterForDbContainer'}>
                <div className={'manufacturer'}>
                    <span className={'CharacteristicTitle'}>Тип товару:</span>

                    <span onClick={() => { GetProductsList(); setPhone(false); setLaptop(false); setTablet(false); setFIlterParams({}) }}>Всі</span>
                    <span onClick={() => { FindByCateogry('Phone'); setPhone(true); setLaptop(false); setTablet(false); setFIlterParams({}) }}>Телефони</span>

                    <span onClick={() => { FindByCateogry('Tablet'); setPhone(false); setLaptop(false); setTablet(true); setFIlterParams({}) }}>Планшети</span>
                    <span onClick={() => { FindByCateogry('Laptop'); setPhone(false); setLaptop(true); setTablet(false); setFIlterParams({}) }}>Ноутбуки</span>
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

                )}
                <br />
                <br />
                <FontAwesomeIcon onClick={() => setFIlterIcon(!filterIcon)} className={'FilterIcon'} icon={faSlidersH} size="lg" color="black" />
                <div className={`${filterIcon ? 'ResponsiveCheckbox' : 'NotResponsiveCheckbox'}`}>
                    {Phone ? (<PhonesFilter insertParam={insertParam} filterByParams={filterByParams} />) : (null)}
                    {Laptop ? (<LaptopFilter insertParam={insertParam} filterByParams={filterByParams} />) : (null)}
                    {Tablet ? (<TabletFilter insertParam={insertParam} filterByParams={filterByParams} />) : (null)}
                </div>
            </div>
            <div className={'productsContainer'}>
                {ProductsList ? (ProductsList.map(item => <ProductItem key={item.id} {...item} />)) : (null)}
            </div>
            <Rodal width={400}
                height={550}
                measure={'px'}
                closeMaskOnClick={true}
                visible={PorductNotFound}
                onClose={() => setPorductNotFound()}
                animation={'fade'}>

                <div className={'PorductNotFound'}>
                    Товар за вказаними характеристиками не найдено
                    </div>
            </Rodal>
        </div>
    )
}

export default Grid