import React from 'react';
import '../../css/productsGrid.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart, faComment } from "@fortawesome/free-solid-svg-icons";
import StarRatings from 'react-star-ratings';


const ProductItem = ({ product_name, price, rating, comments, front_image }) => {
    price = price.toLocaleString()
    if (typeof rating === 'string' || rating instanceof String) {
        rating = parseFloat(rating)
    }

    return (
        <div className={'productItem'}>
            <div className={'productItemImg'} >
                <img src={front_image} />
            </div>
            <div className={'productItemInfo'}>
                <span>{product_name}</span>
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
                    <div className={'shoppingCartIcon'}>
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" color="white" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductItem