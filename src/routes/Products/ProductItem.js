import React from 'react';
import '../../css/productsGrid.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart, faComment } from "@fortawesome/free-solid-svg-icons";
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

import AuthContext from './../../contexts/AuthContext';
import CartContext from './../../contexts/CartContext';
import api from './../../modules/Auth/ApiAxios';

const ProductItem = ({ id, productable_type, productable_id, product_name, price, rating, comments, front_image }) => {
    let total_price = price;
    price = price.toLocaleString()
    if (typeof rating === 'string' || rating instanceof String) {
        rating = parseFloat(rating)
    }

    const { isLoggedIn, RegisterVisible, setRegisterVisible, } = React.useContext(AuthContext)
    const { cartModal, setCartModal, setCartLoader, cart, setCart, loadCart, setCartTotalPrice, CountProductInCart, setProductsInCart } = React.useContext(CartContext)


    const addToCart = () => {
        if (isLoggedIn) {
            setCartModal(!cartModal);
            setCartLoader(true);
            addToCartBackend();
            CountProductInCart(setProductsInCart);
            loadCart(setCart, setCartLoader, setCartTotalPrice);
        }
        else {
            setRegisterVisible(!RegisterVisible);
        }
    }

    const addToCartBackend = () => {
        let quantity = 1;
        let data = { id, quantity, total_price }
        api().get('/sanctum/csrf-cookie').then(response => {
            api().post("/api/add-to-cart", data).then(result => {
            })
        });
    }

    const newTo = {
        pathname: "/product-item/"+id,
        state: {
            id,
            productable_type,
            productable_id,
            total_price
        }
    };

    return (
        <div className={'productItem'}>
            <div className={'productItemImg'} >
                <img src={front_image} />
            </div>
            <div className={'productItemInfo'}>
                <Link to={newTo}><span>{product_name}</span></Link>
                <div className={'starRating'}>
                    <StarRatings
                        rating={rating}
                        starRatedColor="orange"
                        numberOfStars={5}
                        starDimension="15px"
                        starSpacing="3px"
                        starEmptyColor="gray"
                        name='rating'
                    />
                    <span>{rating}</span>
                    <div className={'comments'}>
                        <FontAwesomeIcon icon={faComment} size="xs" color="black" />
                        <span>{comments}</span>
                    </div>
                </div>
                <div className={'buyBox'}>
                    <span>{price} ₴</span>
                    <div onClick={() => addToCart()} className={'shoppingCartIcon'}>
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" color="white" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductItem