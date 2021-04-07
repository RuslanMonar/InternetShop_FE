import React from 'react';
import '../../css/productsGrid.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart, faComment } from "@fortawesome/free-solid-svg-icons";
import StarRatings from 'react-star-ratings';
import ProductItem from './ProductItem';
import api from '../../modules/Auth/ApiAxios'




const Grid = () => {

    const GetProductsList = () => {
        api().post("/api/products").then(result => {
            //console.log(result.data)
            setProductList(result.data.products)
            return result.data.products
        })
    }

    const [ProductsList, setProductList] = React.useState(() => GetProductsList());
    console.log(ProductsList)
    return (
        <div className={'GridContainer'}>
            <div className={'filterForDbContainer'}>
            </div>
            <div className={'productsContainer'}>
                {ProductsList ? (ProductsList.map(item => <ProductItem key={item.id} {...item} />)):(null)}
            </div>
        </div>
    )
}

export default Grid